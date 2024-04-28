import { CategoriaRepository } from '../repository/catergoriaRespository.js';
import { ComponenteRepository } from '../repository/componenteRepository.js';
const categoriaRepo = new CategoriaRepository();
const componenteRepo = new ComponenteRepository();
const categoriaUpdateController = async (req, res) => {
    const { descripcion, componenteId } = req.body;
    const categoriaId = parseInt(req.params.id);
    try {
        const categoria = await categoriaRepo.findOne({ id: categoriaId });
        const componente = await componenteRepo.findOne({ id: componenteId });
        if (categoria
            && componente) {
            categoria.descripcion = descripcion;
            categoria.componente = componente;
            const categoria_updated = await categoriaRepo.update(categoria);
            res.status(200).json({
                data: categoria_updated,
                message: "The categoria was updated"
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
export default categoriaUpdateController;
//# sourceMappingURL=categoria-Update.Controllers.js.map