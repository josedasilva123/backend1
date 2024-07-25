import { usersDatabase } from "../../database/users.database";
import { IUser } from "../../interfaces/users.interface";

export function getOne(id: number) {
  const user = usersDatabase.find((user) => user.id === id) as IUser;  

  return { id: user.id, name: user.name, email: user.email }
}
