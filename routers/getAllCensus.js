const express = require('express')
const router = express.Router();
const getAllCensus = require("../controllers/census")

const auth = require('../authentication/auth')

router.get('/getAllCensus', getAllCensus.getAllCensus)


// get census by area
router.post('/getCensusByArea', getAllCensus.getCensusByArea)


// get census by City
router.post('/getCensusByCity', getAllCensus.getCensusByCity)

// get census by Address
router.post('/getCensusByAddress', getAllCensus.getCensusByAddress)




// get person that have not NIC
router.get('/getDataWihoutNIC', getAllCensus.getDataWihoutNIC)

module.exports = router