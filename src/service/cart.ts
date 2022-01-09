import { UserModel } from '../models/user';
import { findUserById } from '../service/user';
import { updateCart } from '../dao/user';
import { findProductById } from '../service/product';


export const findCart = async( id:string ) =>{
    const user = await findUserById(id);
    return user.cart;
};


export const addOneItem = async( id:string, productId:string, cant:number ) =>{
    const user = await findUserById(id);
    const product = await findProductById(productId);
    const newCart = user.cart
    newCart.push({ name:product.name,quantity:cant,price:product.price });
    await updateCart(id,newCart);
    return newCart;
};

export const updateOneItem = async( id:string, productId:string, cant:number ) =>{
    const user = await findUserById(id);
    const product = await findProductById(productId);
    const newCart = user.cart.map( x=>{
        if(x.name === product.name){
            return { name:x.name, price: x.price, quantity: x.quantity + cant }
        }
        return x
    });

    await updateCart(id,newCart);
    return newCart;
};

export const deleteItem = async( id:string, idProduct:string ) =>{

    const cart = await findCart( id );
    const product = await findProductById(idProduct);
    const newCart = cart.filter((x)=>{
        if( product.name != x.name ){
            return x 
        }
    });
    
    await updateCart(id,newCart);
    return newCart;

};

export const deleteCart = async( id:string )=>{
    const user = await UserModel.findByIdAndUpdate({ _id:id },{ cart:[] })
    return user
};