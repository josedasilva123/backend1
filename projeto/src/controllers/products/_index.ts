import { create } from "./create.controller";
import { getMany } from "./getMany.controller";
import { getOne } from "./getOne.controller";
import { remove } from "./remove.controller";
import { update } from "./update.controller";

export const productsController = { create, getMany, getOne, remove, update };
