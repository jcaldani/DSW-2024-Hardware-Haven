import { Request, Response } from 'express';
import { CompraRepository } from '../repository/compraRepository.js';


const compraRepo = new CompraRepository();

const compraGetAllController = async (req: Request, res: Response): Promise<void> => {    
    try {
        const compras = await compraRepo.findAll();
        
        if(compras!=undefined){
        res.status(200).json(
            {
             data: compras,
             message:"All the compras"
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

export default compraGetAllController;
