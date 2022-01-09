import { UserModel } from '../models/user';
import { UserData } from '../types/user';
import { ProductCartData } from '../types/cart';


export const create = async( name: string, email: string, password: string ):Promise<UserData> =>{
    const user = await UserModel.create({ name, email, password,cart:[]});
    return user;
};

export const find = async():Promise<UserData[]> =>{
    const users = UserModel.find({});
    return users;
}   

export const findById = async( id:string):Promise<UserData> =>{
    const user = await UserModel.findById(id) as UserData;
    return user;
}

export const findByEmail = async( email:string):Promise<UserData> =>{
    const user = await UserModel.find({email:email});
    return user[0];
}

export const update = async( id:string,data:UserData ):Promise<UserData>=> {
    const { name, email } = data;
    const user = await UserModel.findByIdAndUpdate({_id:id},{ name, email }) as UserData;
    return user;
}

export const updateCart = async( id:string,data:ProductCartData[] ):Promise<UserData>=> {
    const user = await UserModel.findByIdAndUpdate({_id:id},{ cart:data}) as UserData;
    return user;
}

export const deleteById = async( id:string ):Promise<UserData>=> {
    const user = await UserModel.findByIdAndDelete({_id:id}) as UserData;
    return user;
}