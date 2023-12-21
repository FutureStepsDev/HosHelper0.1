const db = require('../models/index');
const Hospital = db.Hospital;
const createHospital = async (req, res) => {
  try {
    const { hospitalName, address, phone, fax, emergency, websites, imageUrl } = req.body;
    const newHospital = await Hospital.create({
      hospitalName,
      address,
      phone,
      fax,
      emergency,
      websites,
      imageUrl,
    });
    res.status(201).json({
      success: true,
      hospital: newHospital,
    });
  } catch (error) {
    console.error('Error creating hospital:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.findAll();
    res.json(hospitals);
  } catch (error) {
    console.error('Error getting hospitals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getHospitalById = async (req, res) => {
  try {
    const hospitalId = req.params.id;
    const hospital = await Hospital.findByPk(hospitalId);

    if (!hospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }

    res.json(hospital);
  } catch (error) {
    console.error('Error getting hospital by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createHospital,
  getAllHospitals,
  getHospitalById,
};
