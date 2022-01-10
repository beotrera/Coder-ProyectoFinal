"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByEmail = exports.find = exports.create = void 0;
const user_1 = require("../service/user");
const cart_1 = require("../service/cart");
const order_1 = require("../models/order");
const email_1 = require("../utils/email");
const create = async (id) => {
    const user = await (0, user_1.findUserById)(id);
    const orderNumber = (await order_1.OrderModel.find({})).length + 1;
    const order = await order_1.OrderModel.create({ items: user.cart, email: user.email, orderNumber: orderNumber, state: 'generated' });
    await (0, email_1.newOrder)(user, orderNumber);
    await (0, cart_1.deleteCart)(id);
    return order;
};
exports.create = create;
const find = async () => {
    const orders = await order_1.OrderModel.find({});
    return orders;
};
exports.find = find;
const findByEmail = async (email) => {
    const order = await order_1.OrderModel.find({ email: email });
    return order;
};
exports.findByEmail = findByEmail;
