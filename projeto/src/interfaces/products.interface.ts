export interface IProduct{
    id: number;
    name: string;
    description?: string;
    price: number;
    createdAt: Date;
    updatedAt?: Date;
}

export type TCreateProductData = Pick<IProduct, "name" | "description" | "price">;

export type TUpdateProductData = Partial<TCreateProductData>;
