"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, lowercase: true, require: 'name is require' },
    description: String,
    stock: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    category: String
}, { timestamps: true });
ProductSchema.plugin(mongoose_unique_validator_1.default);
exports.ProductModel = (0, mongoose_1.model)('products', ProductSchema);
