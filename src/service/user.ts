import bcrypt from 'bcrypt';
import { UserData } from '../types/user';
import { create, find, findById, update, deleteById } from '../dao/user';
import { newUser } from '../utils/email';


export const createUser = async( name: string, email: string, password: string ):Promise<UserData>=>{
    const hash = await bcrypt.hash( password as string,10 )
    const user = await create(name,email,hash);
    await newUser(user);
    return user;
};

export const getUsers = async():Promise<UserData[]>=>{
    const users = await find();
    return users
}   

export const findUserById = async( id:string ):Promise<UserData>=>{
    const user = await findById(id);
    return user;
}

export const updateUser = async( id:string,data:UserData ):Promise<UserData>=>{
    const user = await update(id,data);
    return user;
}

export const deleteUser = async( id:string ):Promise<UserData>=> {
    const user = await deleteById(id);
    return user;
}