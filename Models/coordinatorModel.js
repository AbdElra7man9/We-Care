const mongoose = require('mongoose');

const User = require('./userModel');

const Coordinator = User.discriminator(
  'Coordinator',
  new mongoose.Schema({}, { discriminatorKey: 'userType' })
);

module.exports = Coordinator;
