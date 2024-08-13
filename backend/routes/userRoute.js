// here we wull create multiple routes for our user

import express from 'express'
import { loginUser,registerUser } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post("/login",loginUser); //endpoint for login
userRouter.post("/register",registerUser); //endoint for register 


export default userRouter;

