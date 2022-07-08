const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const verifyLogin = require('../middlewaire/verifyLogin');
const UserController = require('../controllers/UserController');

/* 
    "name": "Admin",
    "email": "admin@gmail.com",
    "password": "abcabc"
*/


//get all users
router.get('/user/index', verifyLogin, UserController.index);

//get all users
router.get('/user/:userId', verifyLogin, UserController.single);

//create new user
router.post('/user/create', UserController.create);

//login a user
router.post('/login', UserController.login);


module.exports = router;