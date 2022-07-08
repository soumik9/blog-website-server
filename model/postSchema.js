const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    img: String,
    author: String,
    desc: String,
    commentId: [
        { type: mongoose.Types.ObjectId, ref: "Comment" },
    ]
}, { timestamps: true });

const Post = new mongoose.model("Post", postSchema);
module.exports = Post

