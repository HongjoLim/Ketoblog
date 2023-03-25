import express from 'express';
import { getCategories } from '../controllers/categories.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getCategories);

export default categoryRouter;