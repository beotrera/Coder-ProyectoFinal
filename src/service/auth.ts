import jsonwebtoken,{ Secret } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { findByEmail } from '../dao/user';
import  Config  from '../config';
import { Decode, JwtResponse, VerifyJwt } from '../types/auth';

export const getJWT = async( emailReq:string,passwordReq:string ):Promise<JwtResponse> => {

    const { email,_id,password } = await findByEmail(emailReq);
    const hash = await bcrypt.compare( passwordReq, password );

    if( !email || !hash ){
        return { menssage:'',token:'' } 
    }

    const jwtConfing = {
        id:_id,
        email:email
    }
    const Token = jsonwebtoken.sign(jwtConfing, Config.JWT_SECRET as Secret, { expiresIn: '30m'});

    return { menssage:'succes',token: Token }

}

export const verifyJWT = async( authorization:string ):Promise<VerifyJwt> => {

    let token;
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7)
    }

    const decode = await decodeToken(token as string);
    

    return decode
}

export const decodeToken = async( token:string ):Promise<VerifyJwt> => {
    
    const decodedToken = jsonwebtoken.verify(token as string, Config.JWT_SECRET as Secret) as Decode

    return { id:decodedToken.id,email:decodedToken.email }
}