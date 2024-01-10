const db = require("..//models/index");
const Patient = db.Patient;

    const getAllPatients=async (req, res) => {
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
          const PatientId = req.params.id;
          const Patient = await Patient.findByPk(PatientId);
      
          if (!Patient) {
            return res.status(404).json({ error: 'Patient not found' });
          }
      
          res.json(Patient);
        } catch (error) {
          console.error('Error getting Patient by ID:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
      module.exports = {
        getAllPatients,
        getPatientById
      };
      
      
      