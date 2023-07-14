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

// const Patient = require('./Models/patientModel');
// const fs = require('fs');
// const patientsString = fs.readFileSync(
//   `${__dirname}/Data/Patients/patients.json`
// );
// const patientsParsed = JSON.parse(patientsString);

// patientsParsed.forEach((doc) => {
//   Patient.create(doc);
// });

// //////////////////////////////
/////////////////////////// creat coordinator //////////////////////////////

// const Coordinator = require('./Models/coordinatorModel');
// const coordinator = {
//   name: 'coor',
//   password: 'coordinator',
//   passwordConfirm: 'coordinator',
//   gender: 'male',
//   email: 'coor@we.com',
// };
// Coordinator.create(coordinator);

////////////////////////////////  add summery for doctors /////////////////////////
// const Doctor = require('./Models/doctorModel');
// const addSummery = async () => {
//   const doctors = await Doctor.find();
//   doctors.forEach((doc) => {
//     doc.summery = `${doc.name}, a renowned Egyptian ${doc.specialization}, spearheads advancements in cardiovascular medicine. With expertise and compassion, he delivers exceptional care, making a profound impact on patients' lives. His dedication and innovation have established him as a respected leader in the field.`;
//     doc.save({ validateBeforeSave: false });
//   });
// };
// addSummery();
/////////////////////////////////

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
