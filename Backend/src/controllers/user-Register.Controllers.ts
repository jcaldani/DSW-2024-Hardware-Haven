import { Request, Response } from 'express';
import { UserRepository } from "../repository/userRepository.js";
import { User } from '../Model/userEntity.js';

const userRepo = new UserRepository();

const userGetOneController = async (req: Request, res: Response): Promise<void> => {       
    const {id, nameUser, password} = req.body; //Ver porque el id no se va a agregar en si

    try{
        const user = await userRepo.findOne({id: id});

        if (user === undefined) {
            const new_user = new User(nameUser, password);
            userRepo.add(new_user);
            res.status(200).json({
                data: new_user,
                message: "The added user"
            });
        } else {
            res.status(404).json({
                data: undefined,
                message: 'User incorrect credentials'
            });
        }

    }
    catch (error) {
        console.error(error);
         res.status(500).json({
            data: undefined,
            message: 'There was a server error'
        });
    }     
};

export default userGetOneController;


      