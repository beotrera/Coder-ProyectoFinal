import { Request } from 'express';

export interface MenssageData {
    email: string;
    body: string;
    type: MenssageType

}

export type MenssageType =  'user' | 'admin';

export interface MenssageBody extends Request{
    body:{
        body: string,
        email?: string
    }
}