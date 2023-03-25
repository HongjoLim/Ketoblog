import Category from '../models/category.js';

export const getCategories = async (req, res) => {
    try{
        const cats = await Category.find();
        res.status(200).send(cats);
    }catch (err) {
        res.status(404).send('cannot find data');
    }
};