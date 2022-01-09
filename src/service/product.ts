import { ProductData } from '../types/products';
import { create, find, findById, update, deleteById } from '../dao/product';


export const createProduct = async( name:string, price:number, stock:number, description:string, category:string ):Promise<ProductData> =>{
    const Product = await create(name, price, stock, description, category);
    return Product;
};

export const getProducts = async( category:string ):Promise<ProductData[]> =>{
    const Products = await find( category );
    return Products;
}   

export const findProductById = async( id:string ):Promise<ProductData> =>{
    const Product = await findById(id);
    return Product;
}

export const updateProduct = async( id:string,data:ProductData ) => {
    await update(id,data);
    const ProductUpdate = await findById(id);
    return ProductUpdate;
}

export const deleteProduct = async( id:string ) => {
    const Product = await deleteById(id);
    return Product;
}