import { Router } from "express";
import userGetAllController from "../controllers/user-GetAll.Controllers.js";
import userGetOneController from "../controllers/user-GetOne.Controllers.js";
//Imports de validaciones
const userRouter = Router();
//Metodos con sus verbos
userRouter.get('/getAll', userGetAllController);
userRouter.get('/getOne/:id', userGetOneController);
/*


userRouter.post('/register', userRegisterController);
userRouter.get('/getOne', userGetOneController);
userRouter.patch('/update', userUpdateController);
userRouter.delete('/deleteOne',userDeleteOneController);


*/
export default userRouter;
//# sourceMappingURL=userRouter.js.map