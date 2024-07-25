import fastify from "fastify";
import { todosRoutes } from "./routes/todos.routes";
import { errorHandler } from "./errors/errorHandler";

export const app = fastify({
  logger: true,
});

app.setErrorHandler(errorHandler);
app.register(todosRoutes, { prefix: "/todos"});