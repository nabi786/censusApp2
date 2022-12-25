
const model = require('../model/model')
const validation = require('../validations/joi')




const addNIC = async(req,res)=>{
    try {





            

            let nic = req.body.NIC

            console.log("NIC",nic)
            console.log("NIC length",nic.length)
            var withoutNICUniqueKey = 0;
            var witoutNIC = false;
            var matchNIC = null;
            var censusData = false;
            if(nic.length == 0){
                witoutNIC = true;
                censusData = true;
                var findDataWithoutNIC = await model.personData.find({witoutNIC : true});

                if(findDataWithoutNIC){
                    withoutNICUniqueKey = 1;
                   var lastAryItem = findDataWithoutNIC[findDataWithoutNIC.length-1]
                    // console.log('last item', lastAryItem)
                    console.log("this is working",lastAryItem)
                    var num = lastAryItem.bayFormKey + 1;
                    nic = `NIC_${num}`;
                    withoutNICUniqueKey = num;
                }
               

                
            }else{


                matchNIC = await model.personData.findOne({NIC : nic});
                
            }
            
            

            var guradianNic = await model.personData.findOne({NIC : req.body.Guardian_NIC});
            var guardianNIC;
            var guardianID;
            
            if(guradianNic != null){
                guardianNIC = guradianNic.NIC;
                guardianID = guradianNic._id;
                
            }
            

            console.log("this id ate of birth", req.body.BirthDate)
           
            if(!matchNIC){
                var person = new model.personData({
                    Name : req.body.Name,
                    NIC  : nic,
                    Address : req.body.Address,
                    IssueDate : req.body.IssueDate,
                    ExpireDate : req.body.ExpireDate,
                    Guardian_NIC : guardianNIC,
                    City : req.body.City.toLowerCase(),
                    Area : req.body.Area.toLowerCase(),
                    Guardian_Relation : req.body.Guardian_Relation.toLowerCase(),
                    familyMembers : guardianID,
                    witoutNIC : witoutNIC,
                    bayFormKey : withoutNICUniqueKey,
                    Census : censusData,
                    Date_of_Birth : req.body.BirthDate
                });
                
                
                await person.save()
                if(guradianNic != null){
                    guradianNic.familyMembers.push(person._id)
                    await guradianNic.save();
                }
                

                res.status(200).json({success : true, msg : "person details added successfully", NIC : person.NIC})


            }else{
                res.status(200).json({success : false, msg : "nic already added"})
            }

        
            
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success : false, msg :"something went wrong with server"})
    }
}









module.exports = {addNIC}