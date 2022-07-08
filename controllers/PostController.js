const mongoose = require('mongoose');
const multer = require('multer')
const path = require('path')

const Post = require('../model/postSchema');

const index = async (req, res, next) => {
    try {
        const posts = await Post.find({}).populate({ path: 'commentId', populate : {  path : 'userId' } }).select({ __v: 0 });
        res.send({ posts, message: 'Successfully loaded all posts', success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Server side error', success: false });
    }
} 

const single = async (req, res, next) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findOne({ _id: postId }).populate({ path: 'commentId', populate : {  path : 'userId' } }).select({ __v: 0 });
        res.send({ post, message: 'Successfully loaded all post', success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Server side error', success: false });
    }
} 

const create = async (req, res, next) => {
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
        res.send({ newPost, message: `Post created successfully`, success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Failed to create post', success: false });
    }
}



module.exports = { index, single, create }