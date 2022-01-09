export interface JwtResponse {
    menssage: string;
    token: string; 
}

export interface Decode {
    id: string;
    email: string;
    iat: number;
    exp: number;
}

export interface VerifyJwt {
    id: string;
    email:string;
}