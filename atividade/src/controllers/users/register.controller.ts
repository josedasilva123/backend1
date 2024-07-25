import { FastifyReply, FastifyRequest } from "fastify";
import { usersService } from "../../services/users/_index";
import { IUser } from "../../interfaces/users.interface";

export function register(
  req: FastifyRequest<{ Body: Omit<IUser, "id"> }>,
  res: FastifyReply
) {
  const user = usersService.register(req.body);

  return res.send(user);
}
