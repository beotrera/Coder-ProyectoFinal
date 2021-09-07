import  mongoose from 'mongoose';
import mongooseUniqueValidator from  'mongoose-unique-validator';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    timestamp:{type: Date ,default:new Date()},
    name: {type:String,lowercase:true,require:"name is require", unique:true},
    description: String,
    code: String,
    category: String,
    price: {type:Number,default:0},
    stock: {type:Number,default:0},
    url: String
})

ProductSchema.set('toJSON',{
    transform:(returnObject)=>{
        returnObject.id = returnObject._id
        delete returnObject.__v
        delete returnObject._id
    }
})

ProductSchema.plugin(mongooseUniqueValidator)

export default  mongoose.model('products',ProductSchema)