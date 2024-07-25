import fastify from "fastify";
import { todosRoutes } from "./routes/todos.routes";

export const app = fastify({
  logger: true,
});

app.setErrorHandler((error, req, res) => {
  return res.status(400).send({ error: error.message });
});

app.register(todosRoutes, { prefix: "/todos"});