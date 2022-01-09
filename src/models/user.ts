import { model,Schema } from 'mongoose';
import { UserData } from '../types/user';
import mongooseUniqueValidator from 'mongoose-unique-validator';



const UserSchema = new Schema<UserData>({
    email:{ type:String, unique:true, lowercase:true, require:'email is require' },
    name:{ type:String,lowercase:true, require:'name is require' },
    password:{type:String, require:'password is require' },
    cart:Array
},{ timestamps: true })

UserSchema.plugin(mongooseUniqueValidator)

export const UserModel = model<UserData>('users',UserSchema)



