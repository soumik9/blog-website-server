const mongoose = require('mongoose');
const Comment = require('../model/commentSchema');
const Post = require('../model/postSchema');

const index = async (req, res, next) => {
    try {
        const comments = await Comment.find({}).select({ __v: 0 });
        res.send({ comments, message: 'Successfully loaded all comments', success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Server side error', success: false });
    }
}

const create = async (req, res, next) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();

        //push comment id to post 
        await Post.updateOne({ _id: req.body.postId }, {
            $push: {
                commentId: newComment._id
            }
        })

        res.send({ newComment, message: `Comment created successfully`, success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Failed to create comment', success: false });
    }
}



module.exports = { index, create }