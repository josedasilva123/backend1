"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoDatabase = void 0;
exports.generateId = generateId;
exports.todoDatabase = [];
let id = 0;
function generateId() {
    id++;
    return id;
}
