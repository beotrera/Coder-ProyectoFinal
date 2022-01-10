import { Response, NextFunction } from 'express';
import logger from '../utils/logger';
import { decodeToken } from '../service/auth';
import { MenssageBody } from '../types/menssage';
import { question, response } from '../service/menssage';


export const setQuestion = async ( req:MenssageBody ,res:Response ,next:NextFunction )=>{
    try{

        const { body } = req.body;
        if(!body){
            return res.status(400).json( 'Missing body' );
        }
        const authorization = req.get('authorization') as string
        const token = authorization.substring(7)
        const { email } = await decodeToken( token );
        await question(body,email);
        res.status(200).json('question add');
    }
    catch(err){
        logger.error(err);
        next(err);
    }
    
}

export const setResponse = async ( req:MenssageBody ,res:Response ,next:NextFunction )=>{
    try{

        const { body, email } = req.body;
        if(!body || !email){
            return res.status(400).json( 'Missing body or email' );
        }
        await response(body,email);
        res.status(200).json('response add');
    }
    catch(err){
        logger.error(err);
        next(err);
    }
    
}

