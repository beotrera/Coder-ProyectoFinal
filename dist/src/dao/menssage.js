"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const menssage_1 = require("../models/menssage");
const create = async (body, email, type) => {
    const menssage = await menssage_1.MenssageModel.create({ body, email, type });
    return menssage;
};
exports.create = create;
