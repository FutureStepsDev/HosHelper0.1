const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/HospitalControllers");
const { signup, signin, logout, userProfile } = require('../controllers/UserControllers');
const { isAuthenticated } = require('../middleware/Auth');
router.post("/hospitals", hospitalController.createHospital);

router.get("/gethospitals", hospitalController.getAllHospitals);

router.get("/hospitals/:id", hospitalController.getHospitalById);

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);
router.get('/me', isAuthenticated, userProfile);
module.exports = router;