import fastify from "fastify";
import { usersRouter } from "./routes/users.routes";
import { errorHandler } from "./errors/errorHandler";

export const app = fastify();

app.setErrorHandler(errorHandler);
app.register(usersRouter, { prefix: "/users"});