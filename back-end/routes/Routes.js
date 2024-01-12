const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/HospitalControllers");
const AppointmentControllers = require("../controllers/AppointmentControllers");
const { User, Pharmacy } = require("../models/index");
const {
  signup,
  signin,
  logout,
  userProfile,
  getAllUser,
  updateProfile,
  deleteProfile,
} = require("../controllers/UserControllers");
const {
  signupPhar,
  updateProfilePhar,
} = require("../controllers/PharmacienControllers");

const PharmacyControllers = require("../controllers/PharmacyControllers");
const { isAuthenticated } = require("../middleware/Auth");
const {
  createDoctor,
  getAllDoctors,
  getdoctorById,
} = require("../controllers/DoctorControllers");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getAllProductForOne,
} = require("../controllers/MedicationControllers");
router.post("/Pharmacy", PharmacyControllers.createPharmacy);
router.get("/getPharmacy", PharmacyControllers.getAllPharmacy);
router.get("/Pharmacy/:id", PharmacyControllers.getPharmacyById);
router.get("/getAllPharmacyForOne/:id",PharmacyControllers.getAllFarmacyForOne);
router.delete("/deletePharmacy/:id", PharmacyControllers.deletePharmacyById);
router.put("/updatePharmacy/:id",PharmacyControllers.updatePharmacy);;
router.post("/hospitals", hospitalController.createHospital);
router.get("/gethospitals", hospitalController.getAllHospitals);
router.get("/hospitals/:id", hospitalController.getHospitalById);
router.put("/updateHospitals/:id", hospitalController.updateHospital);
router.get('/getHospitalCount', hospitalController.getHospitalCount);
router.delete("/deleteHospitals/:id",hospitalController.deleteHospital)
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);
router.get("/me", isAuthenticated, userProfile);
router.get("/getAllUsers", getAllUser);
router.put("/updateProfile/:id", updateProfile);
router.delete("/deleteProfile/:id", deleteProfile);

router.post("/createDoctor", createDoctor);
router.get("/doctors", getAllDoctors);
router.get("/doctor/:id", getdoctorById);

router.post("/createProduct", createProduct);
router.get("/getAllProducts", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getAllProductForOne/:id", getAllProductForOne);
router.post("/signupPhar", signupPhar);

router.put("./updateProfilePhar/:id", updateProfilePhar);
router.post("/appointments", AppointmentControllers.createAppointment);
router.get("/appointments", AppointmentControllers.getAllAppointments);

router.get("/getUserCount", async (req, res) => {
  try {
    const userCount = await User.count();
    res.json({ count: userCount });
  } catch (error) {
    console.error("Error getting user count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getPharmacyCount", async (req, res) => {
  try {
    const pharmacyCount = await Pharmacy.count();
    res.json({ count: pharmacyCount });
  } catch (error) {
    console.error("Error getting pharmacy count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
