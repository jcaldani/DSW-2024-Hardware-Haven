import { Request, Response } from 'express';
import { CompraRepository } from '../repository/compraRepository.js';
import { LineaCompra } from '../model/lineaCompra.entity.js';
import { LineaCompraRepository } from '../repository/lineaCompraRepository.js';


const compraRepo = new CompraRepository();
const lineaCompraRepo = new LineaCompraRepository();

const lineaCompraInsertController = async (req: Request, res: Response): Promise<void> => {       
    const {nroLinea, compraId, cantidad
        //,componenteId
    } = req.body; 

    try{
        //const componente = await componenteRepo.findOne({id: componenteId});
        const compra = await compraRepo.findOne({id: compraId});
        const lineaCompra = await lineaCompraRepo.findOne({nroLinea: nroLinea, compraId:compraId});

        if(!compra||!lineaCompra){
            res.status(404).json({
                data: undefined,
                message: "Error in lineaCompra data"
                    });
        return; 
        }

        const new_lineaCompra = new LineaCompra(cantidad, compra
            //,componente
        );
        lineaCompraRepo.add(new_lineaCompra);
        res.status(201).json({
        data: new_lineaCompra,
        message: "The lineaCompra was added"
            });
    }
    catch (error) {
        console.error(error);
         res.status(500).json({
            data: undefined,
            message: 'There was a server error'
        });
    }     
};

export default lineaCompraInsertController;


      