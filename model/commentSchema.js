const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    text: String,
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    postId: { type: mongoose.Types.ObjectId, ref: "Post" },
}, { timestamps: true });

const Comment = new mongoose.model("Comment", commentSchema);
module.exports = Comment

