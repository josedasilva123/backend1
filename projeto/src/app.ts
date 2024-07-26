import fastify from "fastify";
import { productsRouter } from "./routes/products.routes";

export const app = fastify();

app.register(productsRouter, { prefix: "/products"});