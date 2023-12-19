const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/HospitalControllers");

router.post("/hospitals", hospitalController.createHospital);

router.get("/gethospitals", hospitalController.getAllHospitals);

router.get("/hospitals/:id", hospitalController.getHospitalById);

module.exports = router;
