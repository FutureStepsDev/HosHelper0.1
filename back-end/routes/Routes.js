
const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/HospitalControllers");
const { signup, signin, logout, userProfile } = require('../controllers/UserControllers');
const PharmacyControllers = require('../controllers/PharmacyControllers');
const { isAuthenticated } = require('../middleware/Auth');

const profileRouteHandler = async (req, res, next) => {
    try {
        await isAuthenticated(req, res, next);  
        await userProfile(req, res, next);
    } catch (error) {
        console.error('Error in profileRouteHandler:', error);
        next(error);
    }
};

router.get('/profile', profileRouteHandler);
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
