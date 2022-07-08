const mongoose = require('mongoose');
const multer = require('multer')
const path = require('path')

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
    console.log(req.body);
    try {
        const newPost = new Post({
            title: req.body.title,
            author: req.body.author,
            desc: req.body.desc,
        });

        if (req.file) {
            newPost.img = req.file.path
        } else {
            newPost.img = ''
        }

        await newPost.save();
        console.log(newPost);
        res.send({ newPost, message: `Post created successfully`, success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error, message: 'Failed to create post', success: false });
    }
}



module.exports = { index, create }