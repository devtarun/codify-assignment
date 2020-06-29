const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// IMPORT USER CONTROLLER
const UserController = require('../controllers/User');
// IMPORT AGENCY CONTROLLER
const AgencyController = require('../controllers/Agency');

// GENERATE TOKEN
router.post('/token', UserController.generateToken);

// ADD NEW AGENCY AND CLIENT
router.post('/agency', auth, AgencyController.addNew);

// ADD NEW CLIENT TO AGENCY
router.post('/agency/:agency_id', auth, AgencyController.addClient);

// UPDATE CLIENT
router.put('/agency/:client_id', auth, AgencyController.update);

// GET SINGLE AGENCY WITH ALL CLIENTS
router.get('/agency/:agency_id', auth, AgencyController.getSingle);


module.exports = router;