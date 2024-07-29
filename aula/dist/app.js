"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const todos_routes_1 = require("./routes/todos.routes");
const errorHandler_1 = require("./errors/errorHandler");
exports.app = (0, fastify_1.default)({
    logger: true,
});
exports.app.setErrorHandler(errorHandler_1.errorHandler);
exports.app.register(todos_routes_1.todosRoutes, { prefix: "/todos" });
