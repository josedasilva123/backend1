import fastify from "fastify";
import { todosControllers } from "./controllers/todos.controllers";

export const app = fastify({
  logger: true,
});

app.get("/todos", todosControllers.getMany);

app.post("/todos", todosControllers.create);

app.delete("/todos/:id", todosControllers.remove);
