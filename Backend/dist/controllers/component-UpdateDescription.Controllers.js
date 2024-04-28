import { CompRepository } from "../repository/componenteRepository.js";
const compRepo = new CompRepository();
const compUpdateDescriptionController = async (req, res) => {
    const { newDescription, oldDescription } = req.body;
    const id = parseInt(req.params.id);
    try {
        const comp = await compRepo.findOne({ id: id });
        if (comp) {
            if (comp.description === oldDescription) {
                const comp_updated = await compRepo.updateDescription(comp, newDescription);
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
                message: 'Component incorrect credentials'
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
export default compUpdateDescriptionController;
//# sourceMappingURL=component-UpdateDescription.Controllers.js.map