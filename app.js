const express = require('express');

const doctorRouter = require('./routes/doctorRouter');
const patientRouter = require('./routes/patientRouter');

const app = express();
app.use(express.json());

app.use('/api/v1/doctors', doctorRouter);

module.exports = app;
