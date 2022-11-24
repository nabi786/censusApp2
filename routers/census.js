

const express = require('express')

const censusControler = require('../controllers/census');

const router = express.Router()

const auth = require('../authentication/auth')


router.post('/get_NIC_Data',auth, censusControler.getNICData);


router.put('/add_to_Census_Myself',auth, censusControler.addToCensusME);



router.put('/add_to_Census_My_family',auth, censusControler.add_to_Census_My_family);











module.exports = router