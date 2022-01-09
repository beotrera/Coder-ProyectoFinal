import { Request } from 'express';
import { ProductCartData } from '../types/cart';

export interface UserBody extends Request {
    body:UserData
}

export interface UserData{
    name: string,
    email: string,
    password: string,
    cart: ProductCartData[]
    _id?: string
}