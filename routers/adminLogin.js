const express = require("express");

const router = express.Router();

const loginObject = require('../controllers/login');

var auth = require("../authentication/auth");



// admin login
router.post("/adminLogin", loginObject.adminLogin);




router.post("/agentRegister",auth, loginObject.agentRegister);



router.post("/loginAgent", loginObject.loginAgent);




// get all aggents


router.get("/getAgents", loginObject.getAllAgents);


// dete agent
router.delete("/detelAgents/:id", loginObject.detelAgent);



// agent register







module.exports = router


