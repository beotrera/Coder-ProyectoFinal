"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.findUserById = exports.getUsers = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../dao/user");
const email_1 = require("../utils/email");
const createUser = async (name, email, password) => {
    const hash = await bcrypt_1.default.hash(password, 10);
    const user = await (0, user_1.create)(name, email, hash);
    await (0, email_1.newUser)(user);
    return user;
};
exports.createUser = createUser;
const getUsers = async () => {
    const users = await (0, user_1.find)();
    return users;
};
exports.getUsers = getUsers;
const findUserById = async (id) => {
    const user = await (0, user_1.findById)(id);
    return user;
};
exports.findUserById = findUserById;
const updateUser = async (id, data) => {
    const user = await (0, user_1.update)(id, data);
    return user;
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    const user = await (0, user_1.deleteById)(id);
    return user;
};
exports.deleteUser = deleteUser;
