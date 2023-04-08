import mongoose from 'mongoose';
const { Schema } = mongoose;

const catSchema = new Schema(
{
    name:  {
        type: String,
        required: true
    },
});

const Category = mongoose.model('Category', catSchema);
export default Category;