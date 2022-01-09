import { model,Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { ProductData } from '../types/products';


const ProductSchema = new Schema<ProductData>({
    name: { type:String, unique:true, lowercase:true, require:'name is require'},
    description: String,
    stock: { type:Number, default:0 },
    price: { type:Number, default:0 },
    category: String
},{ timestamps: true })

ProductSchema.plugin(mongooseUniqueValidator)

export const ProductModel = model<ProductData>('products',ProductSchema)



