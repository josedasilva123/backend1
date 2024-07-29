import { IUser } from "../interfaces/users.interface";

export const usersDatabase: IUser[] = [];

let id = 0;

export function generateId(){
    id++;
    return id;
}