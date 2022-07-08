const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const verifyLogin = require('../middlewaire/verifyLogin');
const PostController = require('../controllers/PostController');
const upload = require('../middlewaire/upload')

//get all posts
router.get('/index', PostController.index);

//get single post
router.get('/:postId', PostController.single);

//create new post
router.post('/create', verifyLogin, upload.single('img'), PostController.create);



module.exports = router;