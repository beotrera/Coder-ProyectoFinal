"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.update = exports.findById = exports.find = exports.create = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const user_1 = require("../service/user");
const create = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await (0, user_1.createUser)(name, email, password);
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
        const users = await (0, user_1.getUsers)();
        if (users.length <= 0) {
            return res.status(400).json({ total: 0, data: [] });
        }
        res.status(200).json({ total: users.length, data: users });
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
        const user = await (0, user_1.findUserById)(id);
        if (!user) {
            return res.status(404).json('User not found');
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
        const user = await (0, user_1.updateUser)(id, data);
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
        const user = await (0, user_1.deleteUser)(id);
        if (!user) {
            return res.status(404).json('User not found');
        }
        res.status(200).json(user);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.deleteById = deleteById;
