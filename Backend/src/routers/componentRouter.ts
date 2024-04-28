import { Router } from "express";

import compGetAllController from "../controllers/component-GetAll.Controllers.js";
import compGetOneController from "../controllers/component-GetOne.Controllers.js";
import compRegisterController from "../controllers/component-Register.Controllers.js";
import compUpdateDescriptionController from "../controllers/component-UpdateDescription.Controllers.js";
import compUpdateCompNameController from "../controllers/component-UpdateCompName.Controllers.js";
import compDeleteOneController from "../controllers/component-DeleteOne.Controllers.js";
import compUpdateController from "../controllers/component-Update.Controllers.js";
//Imports de validaciones
import {sanitizeCompInput} from "../dto/component-sanitize.dto.js"
const compRouter = Router();



//middlewares
compRouter.get('/getAll', compGetAllController)
compRouter.get('/getOne/:id', compGetOneController)
compRouter.post('/register',sanitizeCompInput,  compRegisterController);
compRouter.patch('/updateDescription/:id',sanitizeCompInput, compUpdateDescriptionController);
compRouter.patch('/updateCompName/:id',sanitizeCompInput, compUpdateCompNameController);
compRouter.delete('/deleteOne/:id',compDeleteOneController);
compRouter.put('/Update/:id',sanitizeCompInput, compUpdateController)


export default compRouter;