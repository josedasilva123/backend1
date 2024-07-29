import fastify from "fastify";
import { productsRouter } from "./routes/products.routes";
import { errorHandler } from "./errors/errorHandler";

export const app = fastify();

app.setErrorHandler(errorHandler);
app.register(productsRouter, { prefix: "/products"});