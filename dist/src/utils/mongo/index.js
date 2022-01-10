"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../logger"));
const config_1 = __importDefault(require("../../config"));
async function connectToDatabase() {
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ignoreUndefined: true,
    };
    const mongooseConnection = await mongoose_1.default.connect(config_1.default.MONGO_DB_URI, opts);
    if (!mongooseConnection.connection) {
        logger_1.default.error('Couldn\'t connect to mongo');
        return null;
    }
    return mongooseConnection;
}
exports.connectToDatabase = connectToDatabase;
exports.default = mongoose_1.default;
