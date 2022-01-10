"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCart = exports.deleteItem = exports.updateOneItem = exports.addOneItem = exports.findCart = void 0;
const user_1 = require("../models/user");
const user_2 = require("../service/user");
const user_3 = require("../dao/user");
const product_1 = require("../service/product");
const findCart = async (id) => {
    const user = await (0, user_2.findUserById)(id);
    return user.cart;
};
exports.findCart = findCart;
const addOneItem = async (id, productId, cant) => {
    const user = await (0, user_2.findUserById)(id);
    const product = await (0, product_1.findProductById)(productId);
    const newCart = user.cart;
    newCart.push({ name: product.name, quantity: cant, price: product.price });
    await (0, user_3.updateCart)(id, newCart);
    return newCart;
};
exports.addOneItem = addOneItem;
const updateOneItem = async (id, productId, cant) => {
    const user = await (0, user_2.findUserById)(id);
    const product = await (0, product_1.findProductById)(productId);
    const newCart = user.cart.map(x => {
        if (x.name === product.name) {
            return { name: x.name, price: x.price, quantity: x.quantity + cant };
        }
        return x;
    });
    await (0, user_3.updateCart)(id, newCart);
    return newCart;
};
exports.updateOneItem = updateOneItem;
const deleteItem = async (id, idProduct) => {
    const cart = await (0, exports.findCart)(id);
    const product = await (0, product_1.findProductById)(idProduct);
    const newCart = cart.filter((x) => {
        if (product.name != x.name) {
            return x;
        }
    });
    await (0, user_3.updateCart)(id, newCart);
    return newCart;
};
exports.deleteItem = deleteItem;
const deleteCart = async (id) => {
    const user = await user_1.UserModel.findByIdAndUpdate({ _id: id }, { cart: [] });
    return user;
};
exports.deleteCart = deleteCart;
