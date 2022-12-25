
const model = require('../model/model')





const getNICData = async (req,res)=>{
    try{

        var getNIC = await model.personData.findOne({NIC : req.body.NIC}).populate("familyMembers")
        
        if(getNIC){
            
        

            if(getNIC.ExpireDate ==req.body.ExpireDate){

         

        

                if(getNIC.IssueDate == req.body.IssueDate){

                    
                    res.status(200).json({success : true, personData : getNIC})


                }else{
                res.status(404).json({success : false, msg : "invalid Issue date"})
                }



            }else{
                    res.status(404).json({success : false, msg : "invalid Expire date"})
            }

        }else{
            res.status(404).json({success : false, msg : "invalid NIC"})
        }

    }catch(err){

        res.status(500).json({success : false ,msg:"something went wrong in server"})
    }
}








const addToCensusME = async (req,res)=>{

    try {

      
        var findPeopleByNIC = await model.personData.findOne({NIC : req.body.NIC})

        if(findPeopleByNIC){
           
            if(findPeopleByNIC.Census != "true"){

                await model.personData.findOneAndUpdate({NIC : req.body.NIC}, {Census : true})


                res.status(200).json({success : true, msg : "census successfully"})
            }else{
                
                res.status(200).json({success : false, msg : "already census"})
                
            }
            
        }else{
             
            res.status(404).json({success : false, msg : "invalid NIC"})
        }
        
    


    } catch (error) {
        console.log(error)
        res.status(500).json({success : false, msg : "something went wrong in server"})
    }   
}   






const add_to_Census_My_family = async (req,res)=>{


        try {


            var idsAry = req.body.idsAry;
            var currentFamilyOwnerNIC = req.body.NIC;
            if(typeof(idsAry) == "object"){
                
                if(idsAry.length > 0){
                    
                    
                
                    idsAry.forEach(async (item,index)=>{
                        var data = await model.personData.findOneAndUpdate({_id : item},{Census : true}); 
                    });
                     // finding current family owner
                    var familyOwner = await model.personData.findOne({NIC : currentFamilyOwnerNIC});

                    // deleting not selected memebers from database and f-Member ary
                    var allMembers = familyOwner.familyMembers;
                   
                    if(allMembers){
                        allMembers.forEach((item1,index1)=>{

                            idsAry.forEach(async(item2,index2)=>{
                                if(item1 != item2){
                                    await model.personData.findOneAndDelete({_id : item1}) 
                                }
                            })
                                
                        })
                    }


                    familyOwner.familyMembers = idsAry;

                    await familyOwner.save();
                    res.status(200).json({success: true, msg : "family census added successfully"});
                }else{
                    res.status(404).json({success: false, msg : "kinldy add item in array"});
                }

            }else{
                
                res.status(404).json({success: false, msg : "kinldy send data in array formate"});
            }

                

            
        } catch (error) {
            console.log(error)
            res.status(500).json({success : false ,msg : "something went wrong in server"})
        }   
}









// get all census users
const getAllCensus = async(req,res)=>{
    try {
        
        var allCensusAry = await model.personData.find({Census : true});
        if(allCensusAry.length > 0){
            res.status(200).json({success : true, allCensus : allCensusAry})
        }else{
            res.status(404).json({success : false, msg : "not record found"})
        }

    } catch (error) {
        res.status(500).json({success : false, msg : "something went wrong"})
    }
}







// get census by Area

const getCensusByArea = async(req,res)=>{
    try {
        
        var allCensusAry = await model.personData.find({Area : req.body.Area});

        if(allCensusAry.length > 0){


            res.status(200).json({success : true, allCensusAry})

        }else{
            
            res.status(200).json({success : false, allCensusAry})
        }
    } catch (error) {
        res.status(500).json({success : false, msg : "something went wrong"})
    }
}





// get all census by city


const getCensusByCity = async(req,res)=>{
    try {

        var city = req.body.City
        city = city.toLowerCase()
        var allCensusAry = await model.personData.find({City : city});

        if(allCensusAry.length > 0){


            res.status(200).json({success : true, allCensusAry})

        }else{
            
            res.status(200).json({success : false, allCensusAry})
        }
    } catch (error) {
        res.status(500).json({success : false, msg : "something went wrong"})
    }
}



// get all census by address
const getCensusByAddress = async(req,res)=>{
    try {
        
        var allCensusAry = await model.personData.find({Address:req.body.Address});

        if(allCensusAry.length > 0){


            res.status(200).json({success : true, allCensusAry})

        }else{
            
            res.status(200).json({success : false, allCensusAry})
        }
    } catch (error) {
        res.status(500).json({success : false, msg : "something went wrong"})
    }
}











// get all data that have not NIC
const getDataWihoutNIC = async(req,res)=>{
    try {

        var data = await model.personData.find({witoutNIC : true});


        if(data != null){
            
            
            res.status(200).json({data : data, success : true, Number_of_items : data.length})
        }else{

            res.status(200).json({msg : "no data found", success : false,Number_of_items : 0})
        }
        
    } catch (error) {
        res.status(500).json({msg: "something went wrong in server", success : false})
    }
}







const censusObj = {
    getNICData,addToCensusME,add_to_Census_My_family,getAllCensus,getCensusByArea,getCensusByCity,getCensusByAddress
    ,getDataWihoutNIC
}



module.exports = censusObj