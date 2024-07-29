import { IProduct } from "../interfaces/products.interface";

export const productsDatabase: IProduct[] = [];

let id = 0;

export function generateId(){
    id++;
    return id;
}