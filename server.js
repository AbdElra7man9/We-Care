const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({ path: './config.env' });
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log('database connected'));

const port = 3000;
app.listen(port, () => console.log('Server is running'));
