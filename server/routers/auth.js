import express from 'express';
import { getUser, register, login, logout } from '../controllers/auth.js';

const authRouter = express.Router();

authRouter.get('/:user_email', getUser);
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;