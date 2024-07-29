import { generateId, todoDatabase } from "../../database/todos.database";
import { AppError } from "../../errors/AppError";
import { ITodo } from "../../interfaces/todos.interface";

export function create(body: Omit<ITodo, "id">) {
  if(!body.title || !body.content){
    throw new AppError("Missing body parameter (should be title and content)", 400);
  }

  const newTodo: ITodo = {
    id: generateId(),
    title: body.title,
    content: body.content,
  };

  todoDatabase.push(newTodo);

  return newTodo;
}
