import { Response, NextFunction } from 'express';
import logger from '../utils/logger';
import { decodeToken } from '../service/auth';
import { MenssageBody } from '../types/menssage';
import { createOrder, findAll, findByUser } from '../service/order';


export const getAllOrders = async ( req:MenssageBody ,res:Response ,next:NextFunction )=>{
    try{
        const order = await findAll();
        res.status(200).json(order);
    }
    catch(err){
        logger.error(err);
        next(err);
    }
    
}

export const getOrder = async ( req:MenssageBody ,res:Response ,next:NextFunction )=>{
    try{

        const authorization = req.get('authorization') as string
        const token = authorization.substring(7)
        const { email } = await decodeToken( token );
        const order = await findByUser(email);
        res.status(200).json(order);
    }
    catch(err){
        logger.error(err);
        next(err);
    }
    
}


export const createNewOrder = async ( req:MenssageBody ,res:Response ,next:NextFunction )=>{
    try{

        const authorization = req.get('authorization') as string
        const token = authorization.substring(7)
        const { id } = await decodeToken( token );
        const order = await createOrder(id);
        res.status(200).json(order);
    }
    catch(err){
        logger.error(err);
        next(err);
    }
    
}

