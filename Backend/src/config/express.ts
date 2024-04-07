import express  from "express";
import userRouter from "../routers/userRouter.js";

//import cors from 'cors';


const HarwareHavenexpressApp = express();

//All the middlewares, routers

HarwareHavenexpressApp.use(express.json());
//HarwareHavenexpressApp.use(cors());

//Routers-------------------------------
HarwareHavenexpressApp.use('/api/user', userRouter);

//Add Here, if you need to add more routers for each custom class.

export {
HarwareHavenexpressApp
};