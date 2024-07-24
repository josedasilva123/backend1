import fastify from "fastify";
import { todosRoutes } from "./routes/todos.routes";

export const app = fastify({
  logger: true,
});

app.register(todosRoutes, { prefix: "/todos"});