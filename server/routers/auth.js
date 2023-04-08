import express from 'express';
import { getUser, register, login, logout, updateUser, deleteUser } from '../controllers/auth.js';

const authRouter = express.Router();

authRouter.get('/:email', getUser);
authRouter.put('/:email', updateUser);
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.delete(':email', deleteUser)

export default authRouter;