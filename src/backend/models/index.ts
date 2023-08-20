import User from "./user";
import { Connection, data } from "../config/connection";

const createTables = async () => {
 
    try {
        const resultado = await data.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

export {User, createTables};