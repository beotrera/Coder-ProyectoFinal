"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.verifyJWT = exports.getJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../dao/user");
const config_1 = __importDefault(require("../config"));
const getJWT = async (emailReq, passwordReq) => {
    const { email, _id, password } = await (0, user_1.findByEmail)(emailReq);
    const hash = await bcrypt_1.default.compare(passwordReq, password);
    if (!email || !hash) {
        return { menssage: '', token: '' };
    }
    const jwtConfing = {
        id: _id,
        email: email
    };
    const Token = jsonwebtoken_1.default.sign(jwtConfing, config_1.default.JWT_SECRET, { expiresIn: '30m' });
    return { menssage: 'succes', token: Token };
};
exports.getJWT = getJWT;
const verifyJWT = async (authorization) => {
    let token;
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }
    const decode = await (0, exports.decodeToken)(token);
    return decode;
};
exports.verifyJWT = verifyJWT;
const decodeToken = async (token) => {
    const decodedToken = jsonwebtoken_1.default.verify(token, config_1.default.JWT_SECRET);
    return { id: decodedToken.id, email: decodedToken.email };
};
exports.decodeToken = decodeToken;
