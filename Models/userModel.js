const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'you must add a confirm for password'],
    validate: function (el) {
      return this.password === el;
    },
  },
  profilePicture: String,
  account: Number,
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});
const User = mongoose.model('User', userSchema);

module.exports = User;
