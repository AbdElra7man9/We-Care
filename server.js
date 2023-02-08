const mongoose = require('mongoose');
const dotenv = require('dotenv');

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

dotenv.config({ path: './config.env' });
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log('database connected'));

const port = 3000;
app.listen(port, () => console.log('Server is running'));
