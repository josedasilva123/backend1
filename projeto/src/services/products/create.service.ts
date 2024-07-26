import { generateId, productsDatabase } from "../../database/products.database";
import { IProduct, TCreateProductData } from "../../interfaces/products.interface";

export function create(body: TCreateProductData){
    const now = new Date();

    const newProduct: IProduct = {
        id: generateId(),
        name: body.name,
        description: body.description,
        price: body.price,
        createdAt: now
    }

    productsDatabase.push(newProduct);

    return newProduct;
}