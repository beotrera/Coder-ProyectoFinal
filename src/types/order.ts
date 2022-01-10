import { ProductCartData } from '../types/cart';
export interface OrderData{
    items: ProductCartData[];
    email:string;
    orderNumber: number;
    state:string;
}