"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.getToken = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const auth_1 = require("../service/auth");
const getToken = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const jwt = await (0, auth_1.getJWT)(email, password);
        if (jwt.token === '') {
            return res.status(400).send('email or password is not correct');
        }
        res.status(200).json(jwt);
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.getToken = getToken;
const auth = async (req, res, next) => {
    try {
        const authorization = req.get('authorization');
        if (!authorization) {
            return res.status(403).send('access denided');
        }
        const { id } = await (0, auth_1.verifyJWT)(authorization);
        if (!id) {
            return res.status(403).send('access denided');
        }
        next();
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.auth = auth;
