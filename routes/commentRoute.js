const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const verifyLogin = require('../middlewaire/verifyLogin');
const CommentController = require('../controllers/CommentController');

//get all posts
router.get('/index', CommentController.index);

//create new post
router.post('/create', verifyLogin, CommentController.create);


module.exports = router;