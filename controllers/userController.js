const User = require('../Models/userModel');
const catchAsync = require('../utils/catchAsync');
const filterObject = require('../utils/filterObject');

updateInfo = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "you can't update password here please use /updateMyPassword.",
        400
      )
    );
  }
  const filteredInfo = filterObject(
    req.body,
    'name',
    'username',
    'profilePicture'
  );
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredInfo, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

module.exports = updateInfo;
