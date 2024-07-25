import { todoDatabase } from "../../database/todos.database";

export function remove(id: number){
    const index = todoDatabase.findIndex(todo => todo.id === Number(id));
    
    if(index === -1){
        throw new Error("Todo not found.");
    }

    todoDatabase.splice(index, 1);

    return { message: "Todo successfully deleted."};
}