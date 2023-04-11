const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const http = require('http');
const AllowedOrigins = require('./Origins');
const SocketServer = require('./SocketServer');
// ////////////////////////////    IMPORT DATA INTO DB ///////////////////////////
// const Doctor = require('./Models/doctorModel');
// const fs = require('fs');
// const doctorsString = fs.readFileSync(
//   `${__dirname}/Data/Doctors/NameSpecPassUser.json`
// );
// const doctorsParsed = JSON.parse(doctorsString);

// doctorsParsed.forEach((doc) => {
//   Doctor.create(doc);
// });
// ////////////////////////

const app = require('./app');
const HttpServer = http.createServer(app);
dotenv.config({ path: './config.env' });
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
