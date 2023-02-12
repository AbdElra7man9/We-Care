const express = require('express');
const errorController = require('./controllers/errorController');

const doctorRouter = require('./routes/doctorRouter');
const patientRouter = require('./routes/patientRouter');
const AppError = require('./utils/AppError');

const app = express();
app.use(express.json());

// doctors routs
app.use('/api/v1/doctors', doctorRouter);

//patient routs
app.use('/api/v1/patient', patientRouter);

//handeling wrong urls
app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

// error handeling
app.use(errorController);
module.exports = app;
