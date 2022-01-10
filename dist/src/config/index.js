"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { APP_PORT, NODE_ENV, MONGO_DB_URI, JWT_SECRET } = process.env;
exports.default = {
    NODE_ENV,
    APP_PORT,
    MONGO_DB_URI,
    JWT_SECRET
};
