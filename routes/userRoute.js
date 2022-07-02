const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// const verifyLogin = require('../middleware/verifyLogin');
const UserController = require('../controllers/UserController');

/* 
    "name": "Admin",
    "email": "admin@gmail.com",
    "password": "abcabc"
*/


//get all users
router.get('/user/index', UserController.index);

//create new user
router.post('/user/create', UserController.create);

//login a user
router.post('/login', UserController.login);


module.exports = router;