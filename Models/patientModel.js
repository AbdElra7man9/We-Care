const mongoose = require('mongoose');

const User = require('./userModel');

const Patient = User.discriminator(
  'Patient',
  new mongoose.Schema({ disease: String }, { discriminatorKey: 'kind' })
);

module.exports = Patient;
