import { ComponenteRepository } from "../repository/componenteRepository.js";
const compRepo = new ComponenteRepository();
const compUpdateController = async (req, res) => {
    const { newCompId, oldCompId, newCompName } = req.body;
    const id = parseInt(req.params.id);
    try {
        const comp = await compRepo.findOne({ id: id });
        if (comp) {
            if (comp.id === oldCompId) {
                comp.name = newCompName;
                comp.id = newCompId;
                const comp_updated = await compRepo.update(comp);
                res.status(200).json({
                    data: comp_updated,
                    message: "The component was updated"
                });
            }
            else {
                res.status(404).json({
                    data: undefined,
                    message: 'Component incorrect credentials'
                });
            }
        }
        else {
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
export default compUpdateController;
//# sourceMappingURL=component-Update.Controllers.js.map