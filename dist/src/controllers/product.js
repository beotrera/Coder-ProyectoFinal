"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.update = exports.findById = exports.find = exports.create = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const product_1 = require("../service/product");
const create = async (req, res, next) => {
    try {
        const { name, description, price, stock, category } = req.body;
        const user = await (0, product_1.createProduct)(name, price, stock, description, category);
        res.status(200).json(user);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.create = create;
const find = async (req, res, next) => {
    try {
        const { filter } = req.query;
        const products = await (0, product_1.getProducts)(filter);
        if (products.length <= 0) {
            return res.status(400).json({ total: 0, data: [] });
        }
        res.status(200).json({ total: products.length, data: products });
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.find = find;
const findById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json('Missing parameters');
        }
        const user = await (0, product_1.findProductById)(id);
        if (user) {
            return res.status(200).json('product not found');
        }
        res.status(200).json(user);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.findById = findById;
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json('Missing parameters');
        }
        const data = req.body;
        const user = await (0, product_1.updateProduct)(id, data);
        res.status(200).json(user);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.update = update;
const deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json('Missing parameters');
        }
        const user = await (0, product_1.deleteProduct)(id);
        res.status(200).json(user);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.deleteById = deleteById;
