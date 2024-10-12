import { config } from 'dotenv';
import * as path from 'path'

config({path:path.join(__dirname,'../.env')   });
interface IConfig {
    PORT:number,
    DB_USERNAME:string,
    DB_PASSWORD:string,
    DB_DATABASE:string,
    DB_PORT:number
    DB_HOST:string,
    SALT_AROUND:number,
    JWT_SECRET:string ,
}
console.log(process.env)
export const configs:IConfig = {
    PORT:+process.env.PORT,
    DB_USERNAME:process.env.DB_USERNAME,
    DB_PASSWORD:process.env.DB_PASSWORD,
    DB_DATABASE:process.env.DB_DATABASE,
    DB_HOST:process.env.DB_HOST,
    DB_PORT:+process.env.DB_PORT,
    SALT_AROUND:+process.env.SALT_AROUND,
    JWT_SECRET:process.env.JWT_SECRET ,
}