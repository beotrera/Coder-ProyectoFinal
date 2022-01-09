import { ProductModel } from '../models/product';
import { ProductData } from '../types/products';


export const create = async( name:string, price:number, stock:number, description:string, category:string ):Promise<ProductData> =>{
    const Product = await ProductModel.create({ name, price, stock, description, category });
    return Product;
};

export const find = async( category:string | undefined ):Promise<ProductData[]> =>{
    const Products = ProductModel.find( category?{ category:category }:{} );
    return Products;
}   

export const findById = async( id:string ):Promise<ProductData> =>{
    const Product = await ProductModel.findById(id) as ProductData;
    return Product;
}

export const update = async( id:string,data:ProductData ):Promise<ProductData> => {
    const { name, price, stock, description, category } = data;
    const Product = await ProductModel.findByIdAndUpdate(id,{ name, price, stock, description, category }) as ProductData;
    return Product;
}

export const deleteById = async( id:string ):Promise<ProductData> => {
    const Product = await ProductModel.findByIdAndDelete(id) as ProductData;
    return Product;
}