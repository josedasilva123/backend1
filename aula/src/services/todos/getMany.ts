import { todoDatabase } from "../../database/todos.database";

export function getMany(){
    return todoDatabase;
}