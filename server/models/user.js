import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    img: {
        data: Buffer,
        contentType: String
    },
    joined: {type: Date, default: Date.now},
});
const User = mongoose.model('user', userSchema);
export default User;