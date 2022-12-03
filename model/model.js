
const mongoose = require('mongoose')
var validator = require('validator');


const schema = mongoose.Schema({
    Name : {
        type : String,
    },
    NIC  : {
        type : String,
        unique : true
    },
    Address : {
        type : String
    },
    IssueDate : {
        type : String
    },
    ExpireDate : {
        type : String
    },
    Guardian_NIC : {
        type : String
    },
    Guardian_Relation : {
        type : String
    },
    Census : {
        default : false
        
    },
    City : {
        type : String
    },
    Area : {
        type : String
    },
    Address : {
        type : String
    },
    familyMembers : [{
        type : mongoose.Schema.Types.ObjectId,
         ref : "personData"
    }],

})






// admin schema

const adminSchema = mongoose.Schema({
    userName : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    }

})





const personData = mongoose.model('personData', schema)
const adminData = mongoose.model('admin', adminSchema)

const modelOBj = {
    personData,adminData
}

module.exports = modelOBj;