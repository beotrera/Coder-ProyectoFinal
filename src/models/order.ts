import { model,Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { OrderData } from '../types/order';



const OrderSchema = new Schema<OrderData>({
    items: Array,
    email: String,
    orderNumber: Number,
    state: String
},{ timestamps: true })

OrderSchema.plugin(mongooseUniqueValidator)

export const OrderModel = model<OrderData>('orders',OrderSchema)



