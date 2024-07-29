import { usersDatabase } from "../../database/users.database";
import { AppError } from "../../errors/AppError";

export function getOne(id: number) {
  const user = usersDatabase.find((user) => user.id === id);  

  if(!user){
    throw new AppError("User not found.", 404);
  }

  return { id: user.id, name: user.name, email: user.email }
}
