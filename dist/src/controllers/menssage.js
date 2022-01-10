"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setResponse = exports.setQuestion = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const auth_1 = require("../service/auth");
const menssage_1 = require("../service/menssage");
const setQuestion = async (req, res, next) => {
    try {
        const { body } = req.body;
        if (!body) {
            return res.status(400).json('Missing body');
        }
        const authorization = req.get('authorization');
        const token = authorization.substring(7);
        const { email } = await (0, auth_1.decodeToken)(token);
        await (0, menssage_1.question)(body, email);
        res.status(200).json('question add');
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.setQuestion = setQuestion;
const setResponse = async (req, res, next) => {
    try {
        const { body, email } = req.body;
        if (!body || !email) {
            return res.status(400).json('Missing body or email');
        }
        await (0, menssage_1.response)(body, email);
        res.status(200).json('response add');
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
};
exports.setResponse = setResponse;
