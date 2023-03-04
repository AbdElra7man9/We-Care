//third party packages
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// local modules
const errorController = require('./controllers/errorController');
const doctorRouter = require('./routes/doctorRouter');
const patientRouter = require('./routes/patientRouter');
const userRouter = require('./routes/userRouter');
const appointmentRouter = require('./routes/appointmentRouter');
const AppError = require('./utils/AppError');

const app = express();
// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

// doctors routs
app.use('/api/v1/doctors', doctorRouter);

//patient routs
app.use('/api/v1/patients', patientRouter);

//appointment routs
app.use('/api/v1/appointments', appointmentRouter);

//general user routs
app.use('/api/v1/users', userRouter);

//handeling wrong urls
app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

// error handeling
app.use(errorController);
module.exports = app;
