"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = remove;
const todos_database_1 = require("../../database/todos.database");
const AppError_1 = require("../../errors/AppError");
function remove(id) {
    const index = todos_database_1.todoDatabase.findIndex(todo => todo.id === Number(id));
    if (index === -1) {
        throw new AppError_1.AppError("Todo not found.", 404);
    }
    todos_database_1.todoDatabase.splice(index, 1);
    return { message: "Todo successfully deleted." };
}
