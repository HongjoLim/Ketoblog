import Category from '../models/category.js';

export const getCategories = async (req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(404).json('cannot find data');
    }
};

export const addCategory = async (req, res) => {
    try {
        const cat = await Category.findOne({ name: req.body.name });

        if (cat) {
            res.status(409).json('Category already exists!')
        } else {
            new Category({ name: req.body.name }).save();
            res.status(200).json('Category added!');

        }
    } catch (err) {
        res.status(500).json('Cannot add category!');
    }
};

export const updateCategory = async (req, res) => {
    try {
        await Category.findOneAndUpdate({
            _id: req.params._id
        }, { $set: req.body },
            { new: true });
        res.status(200).json('Category updated!');
    } catch (err) {
        res.status(404).json('Cannot update category!');
    }
};

export const deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params._id);
        res.status(200).json('Category deleted!');
    } catch (err) {
        res.status(500).json('Cannot delete category!');
    }
};