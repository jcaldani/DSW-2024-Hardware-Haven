import { Request, Response } from 'express';
import { CompRepository } from "../repository/compRepository.js";

const compRepo = new CompRepository();

const compGetAllController = async (req: Request, res: Response): Promise<void> => {    
    try {
        const comps = await compRepo.findAll();
        
        if(comps!=undefined){
        res.status(200).json(
            {
             data: comps,
             message:"All the components"
            }
        );
        }
        else{
            res.status(500).json(
                {
                data: undefined,
                message:'There was a connection error with Hardware Haven database'
                }
                
            );
        }   
        
        
    } catch (error) {
        
        res.status(500).json(
            {
            data: undefined,
            message:'There was a connection error with Hardware Haven database'
            }
            
        ); 
    }      
};

export default compGetAllController;