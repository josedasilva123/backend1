"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMany = getMany;
const todos_database_1 = require("../../database/todos.database");
function getMany() {
    return todos_database_1.todoDatabase;
}
