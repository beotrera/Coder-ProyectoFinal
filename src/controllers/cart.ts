import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import { deleteCart, findCart, updateOneItem, addOneItem, deleteItem } from '../service/cart';
import { decodeToken } from '../service/auth';


export const findOne = async ( req:Request ,res:Response ,next:NextFunction )=>{
    try{

        const authorization = req.get('authorization') as string
        const token = authorization.substring(7)
        const { id } = await decodeToken( token );
        const cart = await findCart( id );
        res.status(200).json(cart);
    }
    catch(err){
        logger.error(err);
        next(err);
    }
    
}

export const addItem = async( req:Request ,res:Response ,next:NextFunction ) => {
    try{
        const { cant } = req.query
        const { productId } = req.params;
        if(!productId || !cant){
            return res.status(400).json( 'Missing parameters' );
        }
        const authorization = req.get('authorization') as string
        const token = authorization.substring(7)
        const { id } = await decodeToken( token );
        const cart = await addOneItem( id, productId, parseInt(cant as string));

        res.status(200).json(cart);
    }
    catch(err){
        logger.error(err);
        next(err);
    }
}

export const updateItem = async( req:Request ,res:Response ,next:NextFunction ) => {
    try{
        const { cant } = req.query
        const { productId } = req.params;
        if(!productId || !cant){
            return res.status(400).json( 'Missing parameters' );
        }
        const authorization = req.get('authorization') as string
        const token = authorization.substring(7)
        const { id } = await decodeToken( token );
        const cart = await updateOneItem( id, productId, parseInt(cant as string));

        res.status(200).json(cart);
    }
    catch(err){
        logger.error(err);
        next(err);
    }
}

export const deleteOneItem = async( req:Request ,res:Response ,next:NextFunction ) => {
    try{
        const idProduct = req.params.id;

        const authorization = req.get('authorization') as string
        const token = authorization.substring(7)
        const { id } = await decodeToken( token );
        const cart = await deleteItem( id, idProduct );

        res.status(200).json(cart);
    }
    catch(err){
        logger.error(err);
        next(err);
    }
}

export const deleteAllCart = async( req:Request ,res:Response ,next:NextFunction ) => {
    try{
        const authorization = req.get('authorization') as string
        const token = authorization.substring(7)
        const { id } = await decodeToken( token );
        const cart = await deleteCart( id );
        res.status(200).json(cart);
    }
    catch(err){
        logger.error(err);
        next(err);
    }
}