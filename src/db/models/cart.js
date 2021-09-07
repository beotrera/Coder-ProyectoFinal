import  mongoose from 'mongoose';
import mongooseUniqueValidator from  'mongoose-unique-validator';


const Schema = mongoose.Schema;

const CartSchema =new Schema({
    created_at:{type:Date, default:Date.now()},
    products:[]
})

CartSchema.set('toJSON',{
    transform:(returnObject)=>{
        returnObject.id = returnObject._id
        delete returnObject.__v
        delete returnObject._id
    }
})

CartSchema.plugin(mongooseUniqueValidator)

export default  mongoose.model('products',ProductSchema)