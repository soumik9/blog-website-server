const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../model/userSchema');

const index = async (req, res, next) => {
    try {
        const users = await User.find({}).select({ __v: 0 });
        res.send({ users, message: 'Successfully loaded all user', success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error, message: 'Server side error', success: false });
    }
}

const create = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            });

            await newUser.save();
            res.send({ newUser, message: `User created successfully`, success: true });
        } else {
            res.send({ message: `Email already used!`, success: false })
        }

    } catch (error) {
        res.status(500).send({ error: error, message: 'Failed to create user', success: false });
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            isValidPassword = await bcrypt.compare(req.body.password, user.password);
 
            if (isValidPassword) {
                const token = jwt.sign({ username: user.email, userId: user._id }, process.env.ACCESS_TOKEN, { expiresIn: '7d' });
                res.send({ accessToken: token, userId: user._id, message: 'Login Success', success: true });
            } else {
                res.status(401).send({ message: "Password wrong!", success: false })
            }
        } else {
            res.status(401).send({ message: "You are not registred user!", success: false })
        }
    } catch (error) {
        res.status(401).send({ error: error, message: 'Failed to Login', success: false });
    }
}


module.exports = { index, create, login, }