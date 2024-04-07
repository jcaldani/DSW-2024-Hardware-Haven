import { Request, Response } from 'express';
import { UserRepository } from "../repository/userRepository.js";

const userRepo = new UserRepository();

const userGetAllController = async (req: Request, res: Response): Promise<void> => {    
    try {
        const users = await userRepo.findAll();
        res.status(200).json(
            {
             data: users,
             message:"All the users"
            }
        ); 
    } catch (error) {
        console.error(error);
        res.status(404).json(
            {
            data: undefined,
            message:'There was a connection error with Hardware Haven database'
            }
            
        ); 
    }      
};

export default userGetAllController;
