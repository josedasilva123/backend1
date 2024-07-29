import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { AppError } from "./AppError";

export function errorHandler(
  error: FastifyError,
  req: FastifyRequest,
  res: FastifyReply
) {
    if(error instanceof AppError){
        return res.status(error.statusCode).send({ error: error.message });
    }

    console.log(error);
    return res.status(500).send({ error: "Internal server error."})
}
