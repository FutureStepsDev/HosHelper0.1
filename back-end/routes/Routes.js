const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/HospitalControllers");
const AppointmentControllers = require('../controllers/AppointmentControllers');
const { getAllPatients, getPatientById, getPatientByUserId } = require('../controllers/PatientControllers');



const {
  signup,
  signin,
  logout,
  userProfile,
  getAllUser,
  updateProfile,
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
  getdoctorByUserId
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
router.get(
  "/getAllPharmacyForOne/:id",
  PharmacyControllers.getAllFarmacyForOne
);
router.post("/hospitals", hospitalController.createHospital);
router.get("/gethospitals", hospitalController.getAllHospitals);
router.get("/hospitals/:id", hospitalController.getHospitalById);
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);
router.get("/me", isAuthenticated, userProfile);
router.get("/getAllUsers", getAllUser);
router.put("/updateProfile/:id", updateProfile);
router.post("/createDoctor", createDoctor);
router.get("/doctors", getAllDoctors);
router.get("/doctor/:id", getdoctorById);
router.get('/doctor/user/:userId', getdoctorByUserId);

router.post("/createProduct", createProduct);
router.get("/getAllProducts", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getAllProductForOne/:id", getAllProductForOne);

router.post("/signupPhar", signupPhar);
router.put("./updateProfilePhar/:id", updateProfilePhar);

router.get('/patients', getAllPatients);
router.get('/patients/:id', getPatientById);
router.get('/patients/user/:userId', getPatientByUserId);

router.post("/appointments", AppointmentControllers.createAppointment);
router.get('/appointments', AppointmentControllers.getAllAppointments);
router.put("/appointments/:appointmentId/approve", AppointmentControllers.approveAppointment);
router.put("/appointments/:appointmentId/reject", AppointmentControllers.rejectAppointment);




module.exports = router;
