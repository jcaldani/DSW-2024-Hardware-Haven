import { Request, Response } from 'express';
import { CompRepository } from "../repository/compRepository.js";
import { Comp } from '../Model/component.entity.js';

const compRepo = new CompRepository();

const compRegisterController = async (req: Request, res: Response): Promise<void> => {       
    const {name, description} = req.body; 

    try{
        const comp = await compRepo.findName({name: name});

        if (comp === undefined) {
            const new_comp = new Comp();
            new_comp.name=name;
            new_comp.description=description;
            compRepo.add(new_comp);
            res.status(201).json({
                data: new_comp,
                message: "The component was added"
            });
        } else {
            res.status(404).json({
                data: undefined
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

export default compRegisterController;
