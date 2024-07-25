import fastify from "fastify";
import { usersRouter } from "./routes/users.routes";

export const app = fastify();

app.register(usersRouter, { prefix: "/users"});