"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateCart = exports.update = exports.findByEmail = exports.findById = exports.find = exports.create = void 0;
const user_1 = require("../models/user");
const create = async (name, email, password) => {
    const user = await user_1.UserModel.create({ name, email, password, cart: [] });
    return user;
};
exports.create = create;
const find = async () => {
    const users = user_1.UserModel.find({});
    return users;
};
exports.find = find;
const findById = async (id) => {
    const user = await user_1.UserModel.findById(id);
    return user;
};
exports.findById = findById;
const findByEmail = async (email) => {
    const user = await user_1.UserModel.find({ email: email });
    return user[0];
};
exports.findByEmail = findByEmail;
const update = async (id, data) => {
    const { name, email } = data;
    const user = await user_1.UserModel.findByIdAndUpdate({ _id: id }, { name, email });
    return user;
};
exports.update = update;
const updateCart = async (id, data) => {
    const user = await user_1.UserModel.findByIdAndUpdate({ _id: id }, { cart: data });
    return user;
};
exports.updateCart = updateCart;
const deleteById = async (id) => {
    const user = await user_1.UserModel.findByIdAndDelete({ _id: id });
    return user;
};
exports.deleteById = deleteById;
