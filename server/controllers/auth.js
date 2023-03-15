import User from '../models/user.js';
import bcrypt from 'bcrypt';
import JsonWebToken from 'jsonwebtoken';

export const register = (req, res) => {
    const match = User.find({email: req.body.email});

    if(match){

        res.status(409).json('User email exists. Please log in');
    } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hash,
            joined: new Date()
        }).save();

        res.status(200).json('Successfully registered');
    }
};

export const login = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                res.status(404).json('You have not registered yet.');
            } else {
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    res.status(401).send('Password does not match.');
                } else {
                    res.status(200).json(user);
                }
            }
        });
};

export const logout = (req, res) => {

};