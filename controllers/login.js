
const model = require('../model/model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')




const adminLogin = async (req,res)=>{
    try {

        // create Admin
        // var password = req.body.password;
        // var hashedPass = bcrypt.hashSync(password,10)
        
        
        // var admin = new model.adminData({
        //     userName : req.body.userName,
        //     email : req.body.email,
        //     password : hashedPass
        // })
        // await admin.save()


        // login Admin


        var admin = await model.adminData.findOne({email : req.body.email})
        
        if(admin){
            var role = req.body.role
            if(admin.role == role){

                var isPassMatch = bcrypt.compareSync(req.body.password,admin.password)
                if(isPassMatch == true){
                    
                    
                    var userID = admin._id
                    var token = jwt.sign({userID},process.env.SECRET_KEY,{
                        expiresIn : "24h"
                    })
                    adminData = [admin, {Token : token}]
                    res.status(200).json({success : true, adminData : adminData});
                    
                }else{
                    res.status(404).json({success : false, msg : "invalid creditionals"})
                }
            }else{
                res.status(404).json({success : false, msg : "invalid creditionals"})
            }
        }else{
            res.status(404).json({success : false, msg : "invalid creditionals"})
        }




    } catch (error) {
        
        res.status(500).json({sucess  : false, msg : "something went wrong in server"})
    }
}





// agent register
const agentRegister= async(req,res)=>{
    try {

        var userID = req.userID.userID;
        var checUser = await model.adminData.findOne({_id : userID})
        
        if(checUser.role == "Admin"){

                var password = req.body.password;
                var hashedPass = bcrypt.hashSync(password,10) 

            var isAlreadyEmail = await model.adminData.findOne({email : req.body.email})
            
            if(isAlreadyEmail){
                res.status(200).json({sucess  : false, msg : "Email Already Exist "})
            }
            else{
                var newAgent = new model.adminData({
                userName : req.body.userName,
                email : req.body.email,
                password : hashedPass,
                role : "Agent"
            });
            
            await newAgent.save();
            
            res.status(200).json({sucess  : true, msg : "agent created succesfully"})
        }
        }else{
            
            res.status(500).json({sucess  : false, msg : "Only admin can create Agents"})
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({sucess  : false, msg : "something went wrong in server"})
    }
}











// loginAgent 

const loginAgent = async(req,res)=>{
    try {
        
        var findUser = await model.adminData.findOne({email : req.body.email});
        if(findUser){

            var isPassMatch = bcrypt.compareSync(req.body.password,findUser.password)
            console.log(isPassMatch)
            if(isPassMatch == true){

                var userID = isPassMatch._id
                var token = jwt.sign({userID},process.env.SECRET_KEY,{
                    expiresIn : "24h"
                   })
                
                var userData = {findUser , token : token}

                res.status(200).json({success: true, userData: userData})
            }else{

                res.status(200).json({success: true, msg : 'invalid creditionals'})
            }
        }else{
            
            res.status(200).json({success: true, msg : 'invalid creditionals'})
        }
    } catch (error) {
        res.status(500).json({success: false, msg : 'something went wrong in server'})
    }
}







// get all agents

const getAllAgents  = async(req,res)=>{
    try {
        
        var findAgents = await model.adminData.find({role : "Agent"});

        if(findAgents){


            res.status(200).json({success: true, data : findAgents})
        }else{
            res.status(404).json({success: false, data : []})

        }
        
        
        
    } catch (error) {
        res.status(500).json({success: false, msg : 'something went wrong in server'})
    }
}








const detelAgent  = async(req,res)=>{
    try {
        
        var findAgents = await model.adminData.findOne({_id : req.params.id});

        if(findAgents){

            await model.adminData.findOneAndDelete({_id : req.params.id});

            res.status(200).json({success: true, msg : "Agent deleted Successfully"})
        }else{
            res.status(404).json({success: false, msg : "Agent already deleted"})
        }
        
        
        
    } catch (error) {
        res.status(500).json({success: false, msg : 'something went wrong in server'})
    }
}




const loginObject = {
    adminLogin,agentRegister,loginAgent,getAllAgents,detelAgent
}


module.exports = loginObject;