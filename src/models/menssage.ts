import { model,Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { MenssageData } from '../types/menssage';



const MenssageSchema = new Schema<MenssageData>({
    email:{ type:String, unique:true, lowercase:true, require:'email is require' },
    body:String,
    type: String

},{ timestamps: true })

MenssageSchema.plugin(mongooseUniqueValidator)

export const MenssageModel = model<MenssageData>('menssages',MenssageSchema)



