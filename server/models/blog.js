import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    cat_id: String,
    content: String,
    user_email: String,
    comments: [{ user_id: String, date: String, comment: String}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    },
    img_url: String
});

const Blog = mongoose.model('blog', blogSchema);
export default Blog;