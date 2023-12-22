const db = require('../models/index');
const Pharmacy = db.Pharmacy;
const createPharmacy = async (req, res) => {
  try {
    const { PharmacyName, address,tel } = req.body;
    const newPharmacy = await Pharmacy.create({
      PharmacyName,
      address,
      tel,
    });
    res.status(201).json({
      success: true,
      hospital: newPharmacy,
    });
  } catch (error) {
    console.error('Error creating Pharmacy:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getAllPharmacy = async (req, res) => {
  try {
    const Pharmacy = await Pharmacy.findAll();
    res.json(Pharmacy);
  } catch (error) {
    console.error('Error getting Pharmacy:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getPharmacyById = async (req, res) => {
  try {
    const PharmacyId = req.params.id;
    const Pharmacy = await Pharmacy.findByPk(PharmacyId);

    if (!Pharmacy) {
      return res.status(404).json({ error: 'Pharmacy not found' });
    }

    res.json(Pharmacy);
  } catch (error) {
    console.error('Error getting hospital by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createPharmacy,
  getAllPharmacy,
  getPharmacyById,
};
