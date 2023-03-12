import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const register = (req, res) => {
    User.find({email: req.body.email})
        .then(user => res.send(user))
        .catch(err => {
            if(err){
                console.log(err);
            }}
    );

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: hash,
        joined: new Date()
    }).save();
};

export const login = (req, res) => {

}

export const logout = (req, res) => {

}