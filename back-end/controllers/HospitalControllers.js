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
const updateHospital = async (req, res) => {
  try {
    const hospitalId = req.params.id;
    const { hospitalName, address, phone, fax, emergency, websites, imageUrl } = req.body;

    const hospitalToUpdate = await Hospital.findByPk(hospitalId);

    if (!hospitalToUpdate) {
      return res.status(404).json({ error: 'Hospital not found' });
    }

    await hospitalToUpdate.update({
      hospitalName,
      address,
      phone,
      fax,
      emergency,
      websites,
      imageUrl,
    });

    res.json({ success: true, message: 'Hospital updated successfully' });
  } catch (error) {
    console.error('Error updating hospital:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteHospital = async (req, res) => {
  try {
    const hospitalId = req.params.id;
    const hospitalToDelete = await Hospital.findByPk(hospitalId);

    if (!hospitalToDelete) {
      return res.status(404).json({ error: 'Hospital not found' });
    }

    await hospitalToDelete.destroy();

    res.json({ success: true, message: 'Hospital deleted successfully' });
  } catch (error) {
    console.error('Error deleting hospital:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getHospitalCount = async (req, res) => {
  try {
    const hospitalCount = await Hospital.count();
    res.json({ count: hospitalCount });
  } catch (error) {
    console.error('Error getting hospital count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createHospital,
  getAllHospitals,
  getHospitalById,
  updateHospital,
  deleteHospital,
  getHospitalCount
};