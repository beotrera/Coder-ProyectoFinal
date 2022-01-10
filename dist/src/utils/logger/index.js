"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, json, colorize } = winston_1.format;
const logger = (0, winston_1.createLogger)({
    format: combine(timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), json()),
    transports: [
        new winston_1.transports.Console({
            level: 'debug',
            format: combine(colorize({
                all: true,
            })),
        }),
    ],
    exceptionHandlers: [
        new winston_1.transports.Console({
            format: combine(colorize({
                all: true,
            })),
        }),
        new winston_1.transports.Console({
            level: 'error',
            format: combine(colorize({
                all: true,
            })),
        }),
    ],
});
exports.default = logger;
