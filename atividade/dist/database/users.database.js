"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersDatabase = void 0;
exports.generateId = generateId;
exports.usersDatabase = [];
let id = 0;
function generateId() {
    id++;
    return id;
}
