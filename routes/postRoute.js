const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PostController = require('../controllers/UserController');

//get all posts
router.get('/index', PostController.index);

//create new post
router.post('/create', PostController.create);



module.exports = router;