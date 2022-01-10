import { findUserById } from '../service/user';
import { deleteCart } from '../service/cart';
import { OrderModel } from '../models/order';
import { newOrder } from '../utils/email';


export const create = async(id:string)=>{
    const user = await findUserById(id);
    const orderNumber = (await OrderModel.find({})).length + 1;
    const order = await OrderModel.create({items: user.cart,email: user.email, orderNumber: orderNumber, state: 'generated'});
    await newOrder(user,orderNumber);
    await deleteCart(id);

    return order
}

export const find = async()=>{
    const orders = await OrderModel.find({});
    return orders
}

export const findByEmail= async(email:string)=>{
    const order = await OrderModel.find({email:email});
    return order
}