"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const UserSchema = new mongoose_1.Schema({
    email: { type: String, unique: true, lowercase: true, require: 'email is require' },
    name: { type: String, lowercase: true, require: 'name is require' },
    password: { type: String, require: 'password is require' },
    cart: Array
}, { timestamps: true });
UserSchema.plugin(mongoose_unique_validator_1.default);
exports.UserModel = (0, mongoose_1.model)('users', UserSchema);
