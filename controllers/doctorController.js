const Doctor = require('../Models/doctorModel');

exports.getAllDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

exports.getDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor.findById(req.params.id);
    res.json(newDoctor);
  } catch (err) {
    console.log(err);
  }
};

exports.addNewDoctor = async (req, res) => {
  const newDoctor = await Doctor.create(req.body);
  res.json(newDoctor);
};
