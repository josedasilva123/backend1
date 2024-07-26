import { FastifyReply, FastifyRequest } from "fastify";
import { productsService } from "../../services/products/_index";

interface QueryParams{
    search?: string;
    skip?: string;
    count?: string;
}

export function getMany(req: FastifyRequest<{ Querystring: QueryParams }>, res: FastifyReply){
    const { search, skip, count } = req.query;

    const params = {
        search: search ? search : undefined,
        skip: skip ? Number(skip) : undefined,
        count: count ? Number(count) : undefined
    }

    const data = productsService.getMany(params);

    return res.status(200).send(data);
}