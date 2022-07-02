const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    title: String,
    author: String,
    role: { type: mongoose.Types.ObjectId, ref: "POST" },
}, { timestamps: true });

const Comment = new mongoose.model("Comment", commentSchema);
module.exports = Comment

