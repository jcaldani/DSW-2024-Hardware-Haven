import { Request, Response } from 'express';
import { PrecioRepository } from '../repository/precioRespository.js';
//import { ComponenteRepository}from '../repository/componenteRespository.js';

const precioRepo = new PrecioRepository();
//const componenteRepo = new ComponenteRepository();


const precioGetOneController = async (req: Request, res: Response): Promise<void> => {       
    const {fechaDesde,
        componenteId
    } = req.body; 

    try{
         //const componente = await componenteRepo.findOne({id:componenteId});
         const precio = await precioRepo.findOne({fechaDesde:fechaDesde, componenteId:componenteId});

        if (precio) {
            res.status(200).json({
                data: precio,
                message: "The precio"
            });
        } else {
            res.status(404).json({
                data: undefined,
                message: 'precio not found'
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

export default precioGetOneController;


      


