import { PrecioRepository } from '../repository/precioRespository.js';
//import { ComponenteRepository}from '../repository/componenteRespository.js';
const precioRepo = new PrecioRepository();
//const componenteRepo = new ComponenteRepository();
const precioDeleteOneController = async (req, res) => {
    const { fechaDesde, componenteId } = req.body;
    try {
        //const componente = await componenteRepo.findOne({id:componenteId});
        const precio = await precioRepo.findOne({ fechaDesde: fechaDesde, componenteId: componenteId });
        if (precio) {
            const precio_deleted = await precioRepo.delete({ fechaDesde: fechaDesde, componenteId: componenteId });
            res.status(200).json({
                data: precio_deleted,
                message: "The precio was deleted"
            });
        }
        else {
            res.status(404).json({
                data: undefined,
                message: 'precio incorrect credentials'
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
export default precioDeleteOneController;
//# sourceMappingURL=precio-DeleteOne.Controllers.js.map