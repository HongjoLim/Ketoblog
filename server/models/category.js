import mongoose from 'mongoose';
const { Schema } = mongoose;

const catSchema = new Schema(
{
    name: String
});

const Category = mongoose.model('Category', catSchema);
export default Category;