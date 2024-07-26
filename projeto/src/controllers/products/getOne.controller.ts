import { FastifyReply, FastifyRequest } from "fastify";
import { productsService } from "../../services/products/_index";

export function getOne(req: FastifyRequest<{ Params: { id: string }}>, res: FastifyReply){
    const product = productsService.getOne(Number(req.params.id));

    return res.status(200).send(product);
}