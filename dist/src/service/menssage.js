"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.question = void 0;
const menssage_1 = require("../dao/menssage");
const question = async (body, email) => {
    const menssage = await (0, menssage_1.create)(body, email, 'user');
    return menssage;
};
exports.question = question;
const response = async (body, email) => {
    const menssage = await (0, menssage_1.create)(body, email, 'admin');
    return menssage;
};
exports.response = response;
