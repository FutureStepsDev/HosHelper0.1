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

const updatePharmacy = async (req, res) => {
  try {
    const PharmacyId = req.params.id;
    const { name, address, tel } = req.body;

    const pharmacyToUpdate = await Pharmacy.findByPk(PharmacyId);

    if (!pharmacyToUpdate) {
      return res.status(404).json({ error: "Pharmacy not found" });
    }

    await pharmacyToUpdate.update({
      name,
      address,
      tel,
    });

    res.json({ success: true, message: "Pharmacy updated successfully" });
  } catch (error) {
    console.error("Error updating pharmacy:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deletePharmacyById = async (req, res) => {
  try {
    const PharmacyId = req.params.id;
    const pharmacyToDelete = await Pharmacy.findByPk(PharmacyId);

    if (!pharmacyToDelete) {
      return res.status(404).json({ error: "Pharmacy not found" });
    }

    await pharmacyToDelete.destroy();

    res.json({ success: true, message: "Pharmacy deleted successfully" });
  } catch (error) {
    console.error("Error deleting pharmacy:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPharmacy,
  getAllPharmacy,
  getPharmacyById,
  getAllFarmacyForOne,
  updatePharmacy,
  deletePharmacyById,
};
