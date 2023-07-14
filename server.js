const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const http = require('http');
const AllowedOrigins = require('./Origins');
const SocketServer = require('./SocketServer');
// // ////////////////////////////    load doctor to DB ///////////////////////////
// const Doctor = require('./Models/doctorModel');
// const fs = require('fs');
// const doctorsString = fs.readFileSync(`${__dirname}/Data/Doctors/doctors.json`);
// const doctorsParsed = JSON.parse(doctorsString);

// doctorsParsed.forEach((doc) => {
//   Doctor.create(doc);
// });
// ////////////////////////      load Patients to DB /////////////////////////////////

const Patient = require('./Models/patientModel');
const fs = require('fs');
const patientsString = fs.readFileSync(
  `${__dirname}/Data/Patients/patients.json`
);
const patientsParsed = JSON.parse(patientsString);

patientsParsed.forEach((doc) => {
  Patient.create(doc);
});

// //////////////////////////////

dotenv.config({ path: './config.env' });
const app = require('./app');
const HttpServer = http.createServer(app);
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log('database connected'));

const io = new Server(HttpServer, {
  cors: {
    origin: AllowedOrigins,
    credentials: true,
  },
});
io.on('connection', (socket) => {
  SocketServer(socket);
});
const port = 5000;
HttpServer.listen(port, () => {
  console.log('server is connected');
});
