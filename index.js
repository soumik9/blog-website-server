const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// requires
const connection = require("./db");
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const commentRoute = require('./routes/commentRoute');

// database connection
(async () => await connection())();


async function run() {
  try {

      // api homepage
      app.get('/api', (req, res) => {
          res.send('Blog server is ready.')
      })


      // routes
      app.use('/api', userRoute);
      app.use('/api/post', postRoute);
      app.use('/api/comment', commentRoute);
      } finally {

  }
}

run().catch(console.dir);

// port listening
const startServer = (port) => {
    try {
      app.listen(port, () => {
        console.log(`Server running: http://localhost:${port}/api`);
      });
    } catch (error) {
      console.error(error);
      process.exit();
    }
  };
startServer(process.env.PORT || 5000);
