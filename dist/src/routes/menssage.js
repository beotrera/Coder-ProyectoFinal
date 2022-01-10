"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const menssage_1 = require("../controllers/menssage");
const route = (0, express_1.Router)();
route.post('/question', auth_1.auth, menssage_1.setQuestion);
route.post('/response', auth_1.auth, menssage_1.setResponse);
exports.default = route;
