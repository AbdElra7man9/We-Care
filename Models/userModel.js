const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const Appointment = require('./appointmentModel');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    trim: true,
  },
  birthDate: Date,
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  phoneNumber: String,
  address: String,
  username: {
    type: String,
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
  passwordConfirm: {
    type: String,
    required: [true, 'you must add a confirm for password'],
    validate: function (el) {
      return this.password === el;
    },
  },
  profilePicture: String,
  account: Number,
  confirmed: {
    type: Boolean,
    default: false,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  emailConfirm: {
    type: String,
  },
});
userSchema.pre('save', function (next) {
  this.username =
    this.username || `${this.name.split(' ').join('-')}-${this._id}`;
  next();
});

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

userSchema.methods.createPIN = async function () {
  const PIN = `${Math.floor(Math.random() * (9999 - 1000)) + 1000}`;
  this.emailConfirm = await bcrypt.hash(PIN, 12);
  return PIN;
};

// doctor model midlewares
userSchema.pre('save', async function (next) {
  if (this.__t != 'Doctor') next();
  this.ScheduleTiming.forEach(async (time) => {
    let timeStep = time.start;
    while (timeStep < time.end) {
      const appointment = await Appointment.create({
        status: 'available',
        date: timeStep,
        doctor: this._id,
      });
      this.appointments.push(appointment._id);
      timeStep.setMinutes(timeStep.getMinutes() + this.timePerPatient);
    }
  });
  next();
});
const User = mongoose.model('User', userSchema);

module.exports = User;
