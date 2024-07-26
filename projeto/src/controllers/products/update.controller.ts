import { FastifyReply, FastifyRequest } from "fastify";
import { productsService } from "../../services/products/_index";
import { TUpdateProductData } from "../../interfaces/products.interface";

export function update(
  req: FastifyRequest<{ Params: { id: string }; Body: TUpdateProductData }>,
  res: FastifyReply
) {
  const product = productsService.update(Number(req.params.id), req.body);

  return res.status(200).send(product);
}
