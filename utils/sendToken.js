const jwt = require('jsonwebtoken');

function getToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
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
    user,
  });
}

module.exports = createSendToken;
