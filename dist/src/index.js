"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const mongo_1 = require("./utils/mongo");
const logger_1 = __importDefault(require("./utils/logger"));
const config_1 = __importDefault(require("./config"));
(0, mongo_1.connectToDatabase)().then(() => {
    const server = http_1.default.createServer(app_1.default);
    server.listen(config_1.default.APP_PORT, () => {
        logger_1.default.info(`Started at port ${config_1.default.APP_PORT} in ${config_1.default.NODE_ENV} environment...`);
    });
}).catch((err) => {
    console.log(err);
    logger_1.default.info('Shutting off as coulnd\'t connect to DB.');
});
