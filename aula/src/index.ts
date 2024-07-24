import fastify, { FastifyRequest } from "fastify";
import { ITodo } from "./interfaces/todos.interface";

const app = fastify({
  logger: true,
});

const todoDatabase: ITodo[] = [];

let id = 1;

// Ler todas as todos, criar uma todo e excluir uma todo

app.get("/todos", (req, res) => {
  return res.send(todoDatabase);
});

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

app.delete(
  "/todos/:id",
  (req: FastifyRequest<{ Params: { id: string } }>, res) => {
    const index = todoDatabase.findIndex(todo => todo.id === Number(req.params.id));

    todoDatabase.splice(index, 1);

    return res.send({ message: "Todo successfully deleted."});
  }
);

const PORT = 3001;

app.listen({ port: PORT }, () => {
  console.log("API successfully started at port " + PORT);
});
