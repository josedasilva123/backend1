import { FastifyInstance } from "fastify";
import { usersController } from "../controllers/users/_index";

export async function usersRouter(router: FastifyInstance) {
  router.post("/", usersController.register);
  router.get("/:id", usersController.getOne);
}
