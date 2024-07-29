"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
const todos_database_1 = require("../../database/todos.database");
const AppError_1 = require("../../errors/AppError");
function create(body) {
    if (!body.title || !body.content) {
        throw new AppError_1.AppError("Missing body parameter (should be title and content)", 400);
    }
    const newTodo = {
        id: (0, todos_database_1.generateId)(),
        title: body.title,
        content: body.content,
    };
    todos_database_1.todoDatabase.push(newTodo);
    return newTodo;
}
