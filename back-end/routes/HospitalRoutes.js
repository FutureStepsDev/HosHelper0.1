// routes/hospitalRoutes.js
const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/HospitalControllers');


// Create a new hospital
router.post('/hospitals', hospitalController.createHospital);

// Get all hospitals
router.get('/gethospitals', hospitalController.getAllHospitals);

// Get one hospital by ID
router.get('/hospitals/:id', hospitalController.getHospitalById);

module.exports = router;
