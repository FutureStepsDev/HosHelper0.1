const db = require("..//models/index");
const Patient = db.Patient;

const getAllPatients = async (req, res) => {
 try {
    const Patients = await Patient.findAll();
    res.json(Patients);
 } catch (error) {
    console.error('Error getting Patients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
 }
};

const getPatientById = async (req, res) => {
 try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.status(200).json(patient);
 } catch (error) {
    res.status(500).json({ error: error.toString() });
 }
};

const getPatientByUserId = async (req, res) => {
  try {
     const patient = await Patient.findOne({ where: { userId: req.params.userId } });
     if (!patient) {
       return res.status(404).json({ error: "Patient not found" });
     }
     res.status(200).json(patient);
  } catch (error) {
     res.status(500).json({ error: error.toString() });
  }
 };

module.exports = {
 getAllPatients,
 getPatientById,
 getPatientByUserId
};