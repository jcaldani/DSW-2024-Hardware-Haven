import { Router } from "express";


import userGetAllController from "../controllers/user-GetAll.Controllers.js";
import userGetOneController from "../controllers/user-GetOne.Controllers.js";
import userRegisterController from "../controllers/user-Register.Controllers.js";
import userUpdatePasswordController from "../controllers/user-UpdatePassword.Controllers.js";
import userUpdateUserNameController from "../controllers/user-UpdateUserName.Controllers.js";
import userDeleteOneController from "../controllers/user-DeleteOne.Controllers.js";
import userUpdateController from "../controllers/user-Update.Controllers.js";
//Imports de validaciones

const userRouter = Router();
//Metodos con sus verbos

userRouter.get('/getAll', userGetAllController)
userRouter.get('/getOne/:id', userGetOneController)
userRouter.post('/register', userRegisterController);
userRouter.patch('/updatePassword', userUpdatePasswordController);
userRouter.patch('/updateUserName', userUpdateUserNameController);
userRouter.delete('/deleteOne',userDeleteOneController);
userRouter.put('/Update',userUpdateController)


export default userRouter;
