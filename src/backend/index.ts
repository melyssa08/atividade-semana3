import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import User from "./models/user";
import route from "./routes/user";
import { data, Connection } from "./config/connection";
import { createTables } from "./models";


dotenv.config();

Connection.connectToDB();

const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*"
}))

app.use("/user", route);


const server: any = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
})

createTables();
