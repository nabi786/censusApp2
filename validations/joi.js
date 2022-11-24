const Joi = require('joi')




// validation one for Admin
const validation = (data) => {
    const Schema = Joi.object({
        NIC: Joi.string()
            .min(13)
            .max(13)
            .required()
    }).options({ allowUnknown: true })

    return Schema.validate(data)
}



module.exports = validation 