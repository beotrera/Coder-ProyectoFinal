"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllCart = exports.deleteOneItem = exports.updateItem = exports.addItem = exports.findOne = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const cart_1 = require("../service/cart");
const auth_1 = require("../service/auth");
const findOne = async (req, res, next) => {
    try {
        const authorization = req.get('authorization');
        const token = authorization.substring(7);
        const { id } = await (0, auth_1.decodeToken)(token);
        const cart = await (0, cart_1.findCart)(id);
        res.status(200).json(cart);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.findOne = findOne;
const addItem = async (req, res, next) => {
    try {
        const { cant } = req.query;
        const { productId } = req.params;
        if (!productId || !cant) {
            return res.status(400).json('Missing parameters');
        }
        const authorization = req.get('authorization');
        const token = authorization.substring(7);
        const { id } = await (0, auth_1.decodeToken)(token);
        const cart = await (0, cart_1.addOneItem)(id, productId, parseInt(cant));
        res.status(200).json(cart);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.addItem = addItem;
const updateItem = async (req, res, next) => {
    try {
        const { cant } = req.query;
        const { productId } = req.params;
        if (!productId || !cant) {
            return res.status(400).json('Missing parameters');
        }
        const authorization = req.get('authorization');
        const token = authorization.substring(7);
        const { id } = await (0, auth_1.decodeToken)(token);
        const cart = await (0, cart_1.updateOneItem)(id, productId, parseInt(cant));
        res.status(200).json(cart);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.updateItem = updateItem;
const deleteOneItem = async (req, res, next) => {
    try {
        const idProduct = req.params.id;
        const authorization = req.get('authorization');
        const token = authorization.substring(7);
        const { id } = await (0, auth_1.decodeToken)(token);
        const cart = await (0, cart_1.deleteItem)(id, idProduct);
        res.status(200).json(cart);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.deleteOneItem = deleteOneItem;
const deleteAllCart = async (req, res, next) => {
    try {
        const authorization = req.get('authorization');
        const token = authorization.substring(7);
        const { id } = await (0, auth_1.decodeToken)(token);
        const cart = await (0, cart_1.deleteCart)(id);
        res.status(200).json(cart);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.deleteAllCart = deleteAllCart;
