import { FastifyInstance } from "fastify";
import { productsController } from "../controllers/products/_index";

export async function productsRouter(router: FastifyInstance) {
  router.post("/", productsController.create);
  router.get("/", productsController.getMany);
  router.get("/:id", productsController.getOne);
  router.patch("/:id", productsController.update);
  router.delete("/:id", productsController.remove);
}
