"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = getOne;
const users_database_1 = require("../../database/users.database");
const AppError_1 = require("../../errors/AppError");
function getOne(id) {
    const user = users_database_1.usersDatabase.find((user) => user.id === id);
    if (!user) {
        throw new AppError_1.AppError("User not found.", 404);
    }
    return { id: user.id, name: user.name, email: user.email };
}
