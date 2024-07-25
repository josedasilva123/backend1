"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosService = void 0;
const create_1 = require("./create");
const getMany_1 = require("./getMany");
const remove_1 = require("./remove");
exports.todosService = { create: create_1.create, getMany: getMany_1.getMany, remove: remove_1.remove };
