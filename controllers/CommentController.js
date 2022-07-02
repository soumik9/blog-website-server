const mongoose = require('mongoose');
const Comment = require('../model/commentSchema');

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
        const newComment = new Comment({
            // name: req.body.name,
            // email: req.body.email,
            // password: hashedPassword,
        });

        await newComment.save();
        res.send({ newComment, message: `Comment created successfully`, success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Failed to create comment', success: false });
    }
}



module.exports = { index, create }