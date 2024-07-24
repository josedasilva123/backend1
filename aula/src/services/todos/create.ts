import { generateId, todoDatabase } from "../../database/todos.database";
import { ITodo } from "../../interfaces/todos.interface";

export function create(body: Omit<ITodo, "id">) {
  const newTodo: ITodo = {
    id: generateId(),
    title: body.title,
    content: body.content,
  };

  todoDatabase.push(newTodo);

  return newTodo;
}
