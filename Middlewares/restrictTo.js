const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

// exports.isDoctor = catchAsync((req, res, next) => {});

module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.__t)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }

    next();
  };
};
