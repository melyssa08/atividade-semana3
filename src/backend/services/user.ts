import User from "../models/user";
import user from "../interfaces/user"


class CrudUser {

    static async create (data: user) {
        const resultBody = await User.create({
            name: data.name,
            age: data.age
        })

        return resultBody;
    }

    static async read (id: number) {
        const resultBody = await User.findByPk(id)
        return resultBody;
    }

    static async readAll () {
        const resultBody = await User.findAll();
        return resultBody;
    }

}

export default CrudUser;