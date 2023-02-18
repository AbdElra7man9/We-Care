const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { promisify } = require('util');

const catchAsync = require('../utils/catchAsync');
const User = require('../Models/userModel');
const Patient = require('../Models/patientModel');
const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');
const filterObject = require('../utils/filterObject');

function getToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

function createSendToken(user, statusCode, res) {
  const token = getToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  // Remove password and pin from output
  user.password = undefined;
  user.emailConfirm = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
}

function sendEmail(email, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 're00zq@outlook.com',
      pass: 'mahmoud1Q2W3E#',
    },
  });

  var mailOptions = {
    from: 're00zq@outlook.com',
    to: email,
    subject,
    text,
    // html: '<h1>test</h1>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}

const sendCreatePIN = catchAsync(async function (id) {
  const user = await User.findById(id);
  const PIN = await user.createPIN();
  await user.save({ validateBeforeSave: false });
  try {
    sendEmail(
      user.email,
      'Confirmation Email!',
      `your confirmation code is: ${PIN}`
    );
  } catch (err) {
    user.emailConfirm = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500
    );
  }
});

exports.patientSignUP = catchAsync(async function (req, res, next) {
  const filteredInfo = filterObject(
    req.body,
    'name',
    'username',
    'email',
    'password',
    'passwordConfirm'
  );
  const newPatient = await Patient.create(filteredInfo);
  await sendCreatePIN(newPatient._id);
  createSendToken(newPatient, 200, res);
});

exports.doctorSignUP = catchAsync(async function (req, res, next) {
  const filteredInfo = filterObject(
    req.body,
    'name',
    'username',
    'email',
    'password',
    'passwordConfirm',
    'specialization'
  );
  const newDoctor = await Doctor.create(filteredInfo);
  await sendCreatePIN(newDoctor._id);
  createSendToken(newDoctor, 200, res);
});

exports.userLogin = catchAsync(async function (req, res, next) {
  const { email, password } = req.body;
  //if user did't enter email or password
  if (!email || !password)
    return next(new AppError('Email and password are required !', 401));

  //if email or password not correct
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError("email or password is't correct", 401));

  //every things OK
  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async function (req, res, next) {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
  const subject = 'Your password reset token (valid for 10 min)';

  try {
    await sendEmail(user.email, subject, message);
    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update changedPasswordAt property for the user
  // 4) Log the user in, send JWT
  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select('+password');

  // 2) check if password and password confirm are exist
  if (!req.body.passwordCurrent || !req.body.passwordConfirm)
    return next(
      new AppError('password and password confirm are required', 401)
    );

  // 3) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // 4) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  // 5) Log user in, send JWT
  createSendToken(user, 200, res);
});

exports.emailConfirmation = catchAsync(async function (req, res, next) {
  // 1) check if user enter pin
  if (!req.body.pin) return next(new AppError('you shoud enter PIN'), 401);
  // 2) check if user enter invalid pin
  if (!(await bcrypt.compare(req.body.pin, req.user.emailConfirm)))
    return next(new AppError('your PIN is incorrect, please try again', 401));
  //3) if email is already confirmed
  if (req.user.confirmed)
    next(new AppError('your email is already confirmed', 401));
  // 4) everythin is ok
  if (await bcrypt.compare(req.body.pin, req.user.emailConfirm)) {
    const user = await User.findById(req.user._id);
    user.confirmed = true;
    user.emailConfirm = undefined;
    await user.save({ validateBeforeSave: false });
    res.status(200).json({
      status: 'success',
      message: 'your email is confirmed',
    });
  }
});
