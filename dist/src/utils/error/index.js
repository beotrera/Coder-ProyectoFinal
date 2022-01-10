"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    const message = 'Something went wrong';
    res.status(500).json(message);
};
