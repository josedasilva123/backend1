"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosControllers = void 0;
const _index_1 = require("../services/todos/_index");
function create(req, res) {
    const todo = _index_1.todosService.create(req.body);
    return res.status(201).send(todo);
}
function getMany(req, res) {
    const todoList = _index_1.todosService.getMany();
    return res.status(200).send(todoList);
}
function remove(req, res) {
    const message = _index_1.todosService.remove(Number(req.params.id));
    return res.status(200).send(message);
}
exports.todosControllers = { create, getMany, remove };
