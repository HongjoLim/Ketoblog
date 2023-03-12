import express from 'express';
import { login, logout, register } from '../controllers/users.js';

const userRouter = express.Router();

userRouter.get('/register', register);

userRouter.get('/login',login);

userRouter.get('/logout', logout);

export default userRouter;