const express = require('express')
const router = express.Router();
const getAllCensus = require("../controllers/census")

const auth = require('../authentication/auth')

router.get('/getAllCensus', getAllCensus.getAllCensus)


// get census by area
router.get('/getCensusByArea', getAllCensus.getCensusByArea)


// get census by City
router.get('/getCensusByCity', getAllCensus.getCensusByCity)

// get census by Address
router.get('/getCensusByAddress', getAllCensus.getCensusByAddress)

module.exports = router