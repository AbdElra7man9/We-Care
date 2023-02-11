const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    trim: true,
  },
  birthDate: Date,
  phoneNumber: String,
  username: {
    type: String,
    required: [true, 'you must provide a user name'],
    trim: true,
    unique: [true, 'user name must be unique'],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, 'you must add email'],
    unique: [true, 'email must be unique'],
    lowercase: true,
    validate: [validator.isEmail, 'please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
  },
  confirmPassword: {
    type: String,
    required: [true, 'you must add a confirm for password'],
  },
  profilePicture: String,
  account: Number,
});
const User = mongoose.model('User', userSchema);

module.exports = User;
