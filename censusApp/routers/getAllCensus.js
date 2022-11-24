const express = require('express')
const router = express.Router();
const getAllCensus = require("../controllers/census")


router.get('/getAllCensus', getAllCensus.getAllCensus)




module.exports = router