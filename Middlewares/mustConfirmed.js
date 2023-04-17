const AppError = require('../utils/AppError');

module.exports = (req, res, next) => {
  if (!req.user.confirmed) {
    return next(
      new AppError(
        `You must confirm your email, OTP was sent to ${req.user.email}`,
        401
      )
    );
  } else next();
};
