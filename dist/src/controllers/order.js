"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewOrder = exports.getOrder = exports.getAllOrders = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const auth_1 = require("../service/auth");
const order_1 = require("../service/order");
const getAllOrders = async (req, res, next) => {
    try {
        const order = await (0, order_1.findAll)();
        res.status(200).json(order);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.getAllOrders = getAllOrders;
const getOrder = async (req, res, next) => {
    try {
        const authorization = req.get('authorization');
        const token = authorization.substring(7);
        const { email } = await (0, auth_1.decodeToken)(token);
        const order = await (0, order_1.findByUser)(email);
        res.status(200).json(order);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.getOrder = getOrder;
const createNewOrder = async (req, res, next) => {
    try {
        const authorization = req.get('authorization');
        const token = authorization.substring(7);
        const { id } = await (0, auth_1.decodeToken)(token);
        const order = await (0, order_1.createOrder)(id);
        res.status(200).json(order);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.createNewOrder = createNewOrder;
