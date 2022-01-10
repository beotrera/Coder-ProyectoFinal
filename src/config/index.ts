import dotenv from 'dotenv';
dotenv.config();

const { PORT,NODE_ENV,MONGO_DB_URI, JWT_SECRET } = process.env

export default {
    NODE_ENV, 
    APP_PORT:PORT,
    MONGO_DB_URI,
    JWT_SECRET
}