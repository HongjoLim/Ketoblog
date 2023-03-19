import express from 'express';
import { register, login, logout, getUser } from '../controllers/auth.js';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/get', getUser);

export default authRouter;