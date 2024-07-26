import { FastifyReply, FastifyRequest } from "fastify";
import { productsService } from "../../services/products/_index";

export function remove(req: FastifyRequest<{ Params: { id: string }}>, res: FastifyReply){
    const message = productsService.remove(Number(req.params.id));

    return res.status(200).send(message);
}