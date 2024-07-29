import { ITodo } from "../interfaces/todos.interface";

export const todoDatabase: ITodo[] = [];

let id = 0;

export function generateId(){
    id++;
    return id;
}