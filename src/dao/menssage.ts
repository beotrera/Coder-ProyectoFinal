import { MenssageModel } from '../models/menssage';
import { MenssageType } from '../types/menssage';

export const create = async(body:string, email:string, type: MenssageType)=>{
    const menssage = await MenssageModel.create({body,email,type});
    return menssage;
}