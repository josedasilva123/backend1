import fastify, { FastifyRequest } from "fastify";
import { IUser } from "./interfaces/users.interface";

const app = fastify();

const usersDatabase: IUser[] = [];

let id = 1;

app.post("/users", (req: FastifyRequest<{ Body: Omit<IUser, "id"> }>, res) => {
  const { name, email, password } = req.body;

  const newUser: IUser = {
    id,
    name,
    email,
    password,
  };

  usersDatabase.push(newUser);

  id++;

  return res.send({ id: newUser.id, name: newUser.name, email: newUser.email });
});

app.get(
  "/users/:id",
  (req: FastifyRequest<{ Params: { id: string } }>, res) => {
    const user = usersDatabase.find(
      (user) => user.id === Number(req.params.id)
    ) as IUser;

    return res.send({ id: user.id, name: user.name, email: user.email });
  }
);

const PORT = 3001;

app.listen({ port: PORT }, () => {
  console.log(`API sucessfully started at port ${PORT}`);
});
