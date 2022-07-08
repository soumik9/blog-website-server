const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PostController = require('../controllers/PostController');
const upload = require('../middlewaire/upload')

//get all posts
router.get('/index', PostController.index);

//create new post
router.post('/create', upload.single('img'), PostController.create);



module.exports = router;