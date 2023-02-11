const express = require('express');
const errorController = require('./controllers/errorController');

const doctorRouter = require('./routes/doctorRouter');
const patientRouter = require('./routes/patientRouter');
const AppError = require('./utils/AppError');

const app = express();
app.use(express.json());

app.use('/api/v1/doctors', doctorRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(errorController);
module.exports = app;
