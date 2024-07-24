import { todoDatabase } from "../../database/todos.database";

export function remove(id: number){
    const index = todoDatabase.findIndex(todo => todo.id === Number(id));

    todoDatabase.splice(index, 1);

    return { message: "Todo successfully deleted."};
}