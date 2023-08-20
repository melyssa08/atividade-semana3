import {Sequelize} from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const data = new Sequelize(
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PW as string,
    {
        host: process.env.HOST,
        port: parseInt("5432"),
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
class Connection {

    static sequelize = data;
    static connectToDB = async () => {
        try {
            await Connection.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (err) {
            console.error('Unable to connect to the database:', err);
        }
    }
}

export {Connection, data};
