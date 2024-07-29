import { IProduct } from "../interfaces/products.interface";

export const productsDatabase: IProduct[] = [
    {
        id: 1,
        name: "Computador",
        description: "Computador bonito",
        price: 3000,
        createdAt: new Date(),
    }
];

let id = 1;

export function generateId(){
    id++;
    return id;
}