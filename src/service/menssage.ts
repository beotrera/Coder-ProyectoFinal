import { create } from '../dao/menssage';


export const question = async(body:string, email:string)=>{
    const menssage = await create(body,email,'user');
    return menssage;
}

export const response = async(body:string, email:string)=>{
    const menssage = await create(body,email,'admin');
    return menssage;
}