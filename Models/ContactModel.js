const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, 'You must add content for you message!'],
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
