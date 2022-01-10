import { create, find, findByEmail } from '../dao/order';


export const createOrder = async(id:string)=>{
    const order = await create(id);
    return order;
}

export const findAll = async()=>{
    const orders = await find();
    return orders;
}

export const findByUser= async(email:string)=>{
    const order = await findByEmail(email);
    return order;
}