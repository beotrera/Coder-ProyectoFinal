"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByUser = exports.findAll = exports.createOrder = void 0;
const order_1 = require("../dao/order");
const createOrder = async (id) => {
    const order = await (0, order_1.create)(id);
    return order;
};
exports.createOrder = createOrder;
const findAll = async () => {
    const orders = await (0, order_1.find)();
    return orders;
};
exports.findAll = findAll;
const findByUser = async (email) => {
    const order = await (0, order_1.findByEmail)(email);
    return order;
};
exports.findByUser = findByUser;
