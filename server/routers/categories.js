import express from 'express';
import { getCategories, addCategory, updateCategory, deleteCategory } from '../controllers/categories.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getCategories);
categoryRouter.post('/', addCategory);
categoryRouter.put('/:_id', updateCategory);
categoryRouter.delete('/:_id', deleteCategory);

export default categoryRouter;