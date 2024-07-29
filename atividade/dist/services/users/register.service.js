"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
const users_database_1 = require("../../database/users.database");
const AppError_1 = require("../../errors/AppError");
function register(body) {
    const { name, email, password } = body;
    if (!name || !email || !password) {
        throw new AppError_1.AppError("Missing body parameter (expected name, email and password).");
    }
    const isUserExists = users_database_1.usersDatabase.some(user => user.email === email);
    if (isUserExists) {
        throw new AppError_1.AppError("Email already registered.", 403);
    }
    const newUser = {
        id: (0, users_database_1.generateId)(),
        name,
        email,
        password,
    };
    users_database_1.usersDatabase.push(newUser);
    return { id: newUser.id, name: newUser.name, email: newUser.email };
}
