import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    cat: String,
    content: String,
    user_email: String,
    comments: [{ user_email: String, date: String, comment: String}],
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