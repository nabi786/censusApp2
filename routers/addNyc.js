const express = require('express')
const router = express.Router()
const auth = require("../authentication/auth")



const {addNIC} = require('../controllers/addNIC')

router.post('/addNyc' ,auth, addNIC)



module.exports = router