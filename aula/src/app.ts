import fastify, { FastifyRequest } from "fastify";
import { ITodo } from "./interfaces/todos.interface";
import { generateId, todoDatabase } from "./database/todos.database";

export const app = fastify({
  logger: true,
});

app.get("/todos", (req, res) => {
  return res.send(todoDatabase);
});

app.post("/todos", (req: FastifyRequest<{ Body: Omit<ITodo, "id"> }>, res) => {
  const newTodo: ITodo = {
    id: generateId(),
    title: req.body.title,
    content: req.body.content,
  };

  todoDatabase.push(newTodo);

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

