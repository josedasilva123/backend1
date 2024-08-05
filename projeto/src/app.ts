import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { productsRouter } from "./routes/products.routes";
import { errorHandler } from "./errors/errorHandler";

export const app = fastify();

app.register(fastifyCors);
app.setErrorHandler(errorHandler);
app.register(productsRouter, { prefix: "/products"});