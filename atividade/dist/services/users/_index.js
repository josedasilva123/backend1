"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const getOne_service_1 = require("./getOne.service");
const register_service_1 = require("./register.service");
exports.usersService = { getOne: getOne_service_1.getOne, register: register_service_1.register };
