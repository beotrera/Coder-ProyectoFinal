import  mongoose from 'mongoose';
import mongooseUniqueValidator from  'mongoose-unique-validator';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        unique: true,
        type: String,
    },
    year:Number,
    addres:String,
    email:{
      unique: true,
      type: String,
  },
    password:{type:String,require:'password is requiere'},
    phone:String
})

UserSchema.set('toJSON',{
  transform:(returnObject)=>{
      returnObject.id = returnObject._id
      delete returnObject.__v
      delete returnObject._id
  }
})

UserSchema.plugin(mongooseUniqueValidator)

UserSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePassword= async function (password,hash) {
  let a = await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  let res = await bcrypt.compareSync(password,hash);
  return res
};


export default mongoose.model('users',UserSchema)