"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenssageModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const MenssageSchema = new mongoose_1.Schema({
    email: { type: String, unique: true, lowercase: true, require: 'email is require' },
    body: String,
    type: String
}, { timestamps: true });
MenssageSchema.plugin(mongoose_unique_validator_1.default);
exports.MenssageModel = (0, mongoose_1.model)('menssages', MenssageSchema);
