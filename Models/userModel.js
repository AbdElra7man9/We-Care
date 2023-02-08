const mongoose = require('mongoose');
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
    //required: true,
    trim: true,
    //unique: true
  },
  password: {
    type: String,
    //required: [true, 'A user must have a password'],
  },
  profilePicture: String,
  account: Number,
});
const User = mongoose.model('User', userSchema);

module.exports = User;
