import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    user_id: String,
    desc: String,
    comments: [{ user_id: String, date: String, comment: String}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

const Blog = mongoose.model('blog', blogSchema);
export default Blog;