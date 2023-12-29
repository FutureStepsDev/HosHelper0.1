
const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/HospitalControllers");
const { signup, signin, logout, userProfile } = require('../controllers/UserControllers');
const PharmacyControllers = require('../controllers/PharmacyControllers');
const auth = require('../middleware/Auth');


router.get('/profile', auth.isAuthenticated,userProfile);
router.post("/Pharmacy", PharmacyControllers.createPharmacy);
router.get("/getPharmacy", PharmacyControllers.getAllPharmacy);
router.get("/Pharmacy/:id", PharmacyControllers.getPharmacyById);
router.post("/hospitals", hospitalController.createHospital);
router.get("/gethospitals", hospitalController.getAllHospitals);
router.get("/hospitals/:id", hospitalController.getHospitalById);
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);

module.exports = router;
