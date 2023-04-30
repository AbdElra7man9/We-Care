//third party packages
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const AllowedOrigins = require('./Origins');
// local modules
const errorController = require('./controllers/errorController');
const doctorRouter = require('./routes/doctorRouter');
const patientRouter = require('./routes/patientRouter');
const userRouter = require('./routes/userRouter');
const appointmentRouter = require('./routes/appointmentRouter');
const reviewRouter = require('./routes/reviewRouter');
const ChatRouter = require('./routes/chatRouter');
const MessageRouter = require('./routes/messageRouter');
const BlogRouter = require('./routes/BlogRouter');
const CommentsRouter = require('./routes/CommentsRouter');
const CoordinatorRouter = require('./routes/CoordinatorRouter');
const AppError = require('./utils/AppError');
const Doctor = require('./Models/doctorModel');
const Patient = require('./Models/patientModel');

const app = express();
// Set security HTTP headers
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: AllowedOrigins,
    credentials: true,
  })
);

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour!',
// });
// app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
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
// async function update() {
//   try {
//     const user = await Patient.updateMany({}, { $set: { profilePicture: 'http://localhost:5000/images/default.png' } })
//     if (user) {
//       console.log('updated')
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
// update()


//Access Images from server side by http://localhost:5000/images/default.png
app.use('/images', express.static('public/img/users'));

// doctors routs
app.use('/api/v1/doctors', doctorRouter);

//patient routs
app.use('/api/v1/patients', patientRouter);

//appointment routs
app.use('/api/v1/appointments', appointmentRouter);

app.use('/api/v1/reviews', reviewRouter);

//general user routs
app.use('/api/v1/users', userRouter);

//Chat
app.use('/api/v1/chat', ChatRouter);

//Message
app.use('/api/v1/message', MessageRouter);

//Blogs
app.use('/api/v1/blog', BlogRouter);

//Comments and likes
app.use('/api/v1/blog', CommentsRouter);

//Comments and likes
app.use('/api/v1/coordinator', CoordinatorRouter);


//handeling wrong urls
app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

// error handeling
app.use(errorController);
module.exports = app;
