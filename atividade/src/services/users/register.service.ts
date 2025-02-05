import { generateId, usersDatabase } from "../../database/users.database";
import { AppError } from "../../errors/AppError";
import { IUser } from "../../interfaces/users.interface";

export function register(body: Omit<IUser, "id">) {
  const { name, email, password } = body;

  if(!name || !email || !password){
    throw new AppError("Missing body parameter (expected name, email and password).");
  }

  const isUserExists = usersDatabase.some(user => user.email === email);

  if(isUserExists){
    throw new AppError("Email already registered.", 403);
  }

  const newUser: IUser = {
    id: generateId(),
    name,
    email,
    password,
  };

  usersDatabase.push(newUser);

  return { id: newUser.id, name: newUser.name, email: newUser.email };
}
