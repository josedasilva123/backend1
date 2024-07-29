import { create } from "./create.service";
import { getMany } from "./getMany.service";
import { getOne } from "./getOne.service";
import { remove } from "./remove.service";
import { update } from "./update.service";

export const productsService = { create, getMany, getOne, remove, update };
