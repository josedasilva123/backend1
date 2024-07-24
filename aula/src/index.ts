import fastify, { FastifyRequest } from "fastify";
import { ITodo } from "./interfaces/todos.interface";

const app = fastify({
  logger: true,
});

const todoDatabase: ITodo[] = [];

let id = 1;

// Ler todas as todos, criar uma todo e excluir uma todo

app.post("/todos", (req: FastifyRequest<{ Body: Omit<ITodo, "id"> }>, res) => {
  const newTodo: ITodo = {
    id,
    title: req.body.title,
    content: req.body.content,
  };

  todoDatabase.push(newTodo);

  id++;

  return res.send(newTodo);
});

const PORT = 3001;

app.listen({ port: PORT }, () => {
  console.log("API successfully started at port " + PORT);
});
