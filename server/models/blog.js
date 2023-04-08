import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    cats: {
        type: Array,
        required: false
    },
    img: {
        type: String
    }
}, {timestamps: true});

const Blog = mongoose.model('blog', blogSchema);
export default Blog;