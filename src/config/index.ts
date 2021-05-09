import * as dotenv from "dotenv";
// carregar.env
dotenv.config();

export const PRODUCTION: boolean = process.env.NODE_ENV === 'production';
export const SERVER_PORT = process.env.SERVER_PORT;
export const DATABASE_URI: string = process.env.DATABASE_URI != null ? process.env.DATABASE_URI : "mongodb://localhost:27017" 
export const DATABASE_NAME: string = process.env.DATABASE_NAME != null ? process.env.DATABASE_NAME : "compasso" 