import { FastifyReply, FastifyRequest } from "fastify";
import { productsService } from "../../services/products/_index";
import { TCreateProductData } from "../../interfaces/products.interface";

export function create(
  req: FastifyRequest<{ Body: TCreateProductData }>,
  res: FastifyReply
) {
  const product = productsService.create(req.body);

  return res.status(201).send(product);
}
