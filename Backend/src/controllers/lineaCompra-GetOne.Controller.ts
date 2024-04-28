import { Request, Response } from 'express';
import { CompraRepository } from '../repository/compraRepository.js';
import { LineaCompraRepository } from '../repository/lineaCompraRepository.js';


const lineaCompraRepo = new LineaCompraRepository();

const lineaCompraGetOneController = async (req: Request, res: Response): Promise<void> => {       
    const {nroLinea, compraId} = req.body;

    try{
        const lineaCompra = await lineaCompraRepo.findOne({nroLinea: nroLinea, compraId:compraId});

        if (lineaCompra) {
            res.status(200).json({
                data: lineaCompra,
                message: "The LineaCompra"
            });
        } else {
            res.status(404).json({
                data: undefined,
                message: 'LineaCompra not found'
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

export default lineaCompraGetOneController;