import { FastifyInstance } from "fastify";
import { todosControllers } from "../controllers/todos.controllers";

export async function todosRoutes(router: FastifyInstance) {
  router.get("/", todosControllers.getMany);
  router.post("/", todosControllers.create);
  router.delete("/:id", todosControllers.remove);
}
