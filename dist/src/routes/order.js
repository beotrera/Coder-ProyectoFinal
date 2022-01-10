"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const menssage_1 = require("../controllers/menssage");
const route = (0, express_1.Router)();
route.get('/', auth_1.auth, menssage_1.setResponse);
route.get('/getAll', auth_1.auth, menssage_1.setResponse);
route.post('/create', auth_1.auth, menssage_1.setQuestion);
exports.default = route;
