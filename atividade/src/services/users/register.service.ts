import { generateId, usersDatabase } from "../../database/users.database";
import { IUser } from "../../interfaces/users.interface";

export function register(body: Omit<IUser, "id">){
    const { name, email, password } = body;
  
    const newUser: IUser = {
      id: generateId(),
      name,
      email,
      password,
    };  

    usersDatabase.push(newUser);

    return { id: newUser.id, name: newUser.name, email: newUser.email };
}