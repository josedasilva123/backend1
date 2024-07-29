"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRoutes = todosRoutes;
const todos_controllers_1 = require("../controllers/todos.controllers");
function todosRoutes(router) {
    return __awaiter(this, void 0, void 0, function* () {
        router.setErrorHandler((error, request, reply) => {
            throw error;
        });
        router.get("/", todos_controllers_1.todosControllers.getMany);
        router.post("/", todos_controllers_1.todosControllers.create);
        router.delete("/:id", todos_controllers_1.todosControllers.remove);
    });
}
