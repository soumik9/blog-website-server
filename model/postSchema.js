const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    author: String,
    commentId: [
        { type: mongoose.Types.ObjectId, ref: "Comment" },
    ]
}, { timestamps: true });

const Post = new mongoose.model("Post", postSchema);
module.exports = Post

