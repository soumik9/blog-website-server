const mongoose = require('mongoose');
const Post = require('../model/postSchema');

const index = async (req, res, next) => {
    try {
        const posts = await Post.find({}).select({ __v: 0 });
        res.send({ posts, message: 'Successfully loaded all posts', success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Server side error', success: false });
    }
}

const create = async (req, res, next) => {
    try {
        const newPost = new Post({
            // name: req.body.name,
            // email: req.body.email,
            // password: hashedPassword,
        });

        await newPost.save();
        res.send({ newPost, message: `Post created successfully`, success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Failed to create post', success: false });
    }
}



module.exports = { index, create }