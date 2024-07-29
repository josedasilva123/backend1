import { todoDatabase } from "../../database/todos.database";
import { AppError } from "../../errors/AppError";

export function remove(id: number){
    const index = todoDatabase.findIndex(todo => todo.id === Number(id));
    
    if(index === -1){
        throw new AppError("Todo not found.", 404);
    }

    todoDatabase.splice(index, 1);

    return { message: "Todo successfully deleted."};
}