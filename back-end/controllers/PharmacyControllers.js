const db = require("../models/index");
const Pharmacy = db.Pharmacy;
const createPharmacy = async (req, res) => {
  try {
    const { name, address, tel, PharmacienId } = req.body;
    const newPharmacy = await Pharmacy.create({
      name,
      address,
      tel,
      PharmacienId,
    });
    res.status(201).json({
      success: true,
      pharmacy: newPharmacy,
    });
  } catch (error) {
    console.error("Error creating Pharmacy:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllPharmacy = async (req, res) => {
  try {
    const Pharmacies = await Pharmacy.findAll();
    res.json(Pharmacies);
  } catch (error) {
    console.error("Error getting Pharmacy:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPharmacyById = async (req, res) => {
  try {
    const PharmacyId = req.params.id;
    const Pharmacies = await Pharmacy.findByPk(PharmacyId);

    if (!Pharmacies) {
      return res.status(404).json({ error: "Pharmacy not found" });
    }

    res.json(Pharmacies);
  } catch (error) {
    console.error("Error getting pharmacy by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllFarmacyForOne = (req, res) => {
  const PharmacienId = req.params.id;
  db.Pharmacien.findByPk(PharmacienId, {
    include: [{ model: Pharmacy }],
  })
    .then((response) => res.status(201).json(response.Pharmacy))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  createPharmacy,
  getAllPharmacy,
  getPharmacyById,
  getAllFarmacyForOne,
};
