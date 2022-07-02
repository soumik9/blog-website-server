const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CommentController = require('../controllers/CommentController');

//get all posts
router.get('/index', CommentController.index);

//create new post
router.post('/create', CommentController.create);


module.exports = router;