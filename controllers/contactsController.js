const Contact = require('../Models/ContactModel');
const User = require('../Models/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.newContact = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const content = req.body.content;
  const message = await Contact.create({ user, content });
  res.status(200).json({
    status: 'success',
    message,
  });
});

exports.getContacts = catchAsync(async (req, res, next) => {
  const contacts = await Contact.find().populate({
    path: 'user',
    select: ['name', 'email', 'phoneNumber', 'profilePicture'],
  });
  res.status(200).json({
    status: 'success',
    results: contacts.length,
    contacts,
  });
});

exports.deleteContact = catchAsync(async (req, res, next) => {
  const contact = await Contact.findByIdAndDelete(req.params.contactId);
  if (!contact)
    return next(new AppError('there is no contact with this id', 400));
  res.json({
    status: 'success',
    message: 'This contact is successfuly deleted!',
  });
});
