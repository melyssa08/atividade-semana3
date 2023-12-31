import express from "express";
import ControllerUser from "../controllers/user";

var route = express.Router()


route.post('/', ControllerUser.create)
route.get('/', ControllerUser.getAllUser)
route.get('/:id', ControllerUser.getUser)

export default route;