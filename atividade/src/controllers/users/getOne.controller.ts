import { FastifyReply, FastifyRequest } from "fastify";
import { usersService } from "../../services/users/_index";

export function getOne(
  req: FastifyRequest<{ Params: { id: string } }>,
  res: FastifyReply
) {
    const user = usersService.getOne(Number(req.params.id));

    return res.send(user);
}
