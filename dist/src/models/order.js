"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const OrderSchema = new mongoose_1.Schema({
    items: Array,
    email: String,
    orderNumber: Number,
    state: String
}, { timestamps: true });
OrderSchema.plugin(mongoose_unique_validator_1.default);
exports.OrderModel = (0, mongoose_1.model)('orders', OrderSchema);
