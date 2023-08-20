import {Request, Response} from 'express';
import CrudUser from '../services/user';

class ControllerUser {
    static async getUser (req: Request, res: Response) {
        const bodyResponse = await CrudUser.read(
            Number(req.params.id))
        res.status(200).json(bodyResponse)
    }

    static async getAllUser (req: Request, res: Response) {
        const bodyResponse = await CrudUser.readAll()

        res.status(200).json(bodyResponse)
    }

    static async create (req: Request, res: Response) {
        const bodyResponse = await CrudUser.create(req.body);

        res.status(200).json(bodyResponse)
    }

    static async update (req: Request, res: Response) {
        const bodyResponse = await CrudUser.update(req.body, 
            Number(req.params.id));

        res.status(200).json(bodyResponse);
    }

    static async delete (req: Request, res: Response) {
        const bodyResponse = await CrudUser.delete(Number(req.params.id))
        res.status(200).json(bodyResponse);
    }
}

export default ControllerUser;