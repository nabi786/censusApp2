const express = require('express')
const router = express.Router();
const getAllCensus = require("../controllers/census")

const auth = require('../authentication/auth')

router.get('/getAllCensus',auth, getAllCensus.getAllCensus)




module.exports = router