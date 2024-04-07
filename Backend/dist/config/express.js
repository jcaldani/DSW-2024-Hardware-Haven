import express from "express";
import userRouter from "../routers/userRouter.js";
//import cors from 'cors';
const HarwareHavenexpressApp = express();
//Todo los middlewares, routers
HarwareHavenexpressApp.use(express.json());
//HarwareHavenexpressApp.use(cors());
//Routers-------------------------------
HarwareHavenexpressApp.use('/api/user', userRouter);
export { HarwareHavenexpressApp };
//# sourceMappingURL=express.js.map