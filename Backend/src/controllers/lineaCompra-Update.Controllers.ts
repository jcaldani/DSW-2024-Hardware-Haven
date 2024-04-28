import { Request, Response } from 'express';
import { CompraRepository } from '../repository/compraRepository.js';
import { LineaCompraRepository } from '../repository/lineaCompraRepository.js';

const compraRepo = new CompraRepository();
const lineaCompraRepo = new LineaCompraRepository();

//const componenteRepo = new ComponenteRepository();

const lineaCompraUpdateController = async (req: Request, res: Response): Promise<void> => {       
    const {nroLinea, compraId, cantidad, subTotal
        //,componenteId
    } = req.body; 
    

    try{
        const compra = await compraRepo.findOne({id: compraId});
        const lineaCompra = await lineaCompraRepo.findOne({nroLinea: nroLinea, compraId:compraId});
        //const componente = await componenteRepo.findOne({id:componenteId});
       
        if (compra && lineaCompra) {
            
            
                lineaCompra.cantidad = cantidad;
                lineaCompra.subTotal = subTotal;
                lineaCompra.compra = compra;
                //lineaCompra.componente = componente;
                
                const lineaCompra_updated = await lineaCompraRepo.update(lineaCompra);
                res.status(200).json({
                    data: lineaCompra_updated,
                    message: "The lineaCompra was updated"
                });
           
                      


        } else {
            res.status(404).json({
                data: undefined,
                message: 'lineaCompra incorrect credentials'
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

export default lineaCompraUpdateController;