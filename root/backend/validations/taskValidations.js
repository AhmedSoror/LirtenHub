const Joi = require('joi')
Joi.objectId=require('joi-objectid')(Joi)

module.exports = {
    createValidation: request => {
        const createSchema = { 
            partnerID : Joi.objectId() , 
            consultancyID :  Joi.objectId() , 
            description : Joi.string().required() , 
            requiredSkills : Joi.array().items(Joi.string()).required(), 
            payment : Joi.number().required() ,
           // finalProduct : Joi.string().uri() , 
           // timeLine : Joi.string() ,  
            state: Joi.string() ,  
            category : Joi.string().required() ,
            yearsOfExperience : Joi.number(),
            //done : Joi.boolean().required() ,
            //ratePartnerDoer : Joi.number() ,
            //ratePartnerConsultancy : Joi.number() ,
            assignedPerson : Joi.objectId(),
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = { 
            description:Joi.string(),
            payment:Joi.number(),
            finalProduct : Joi.string().uri() , 
            timeLine : Joi.string() ,  
            state: Joi.string() ,  
            done : Joi.boolean() ,
            ratePartnerDoer : Joi.number() ,
            ratePartnerConsultancy : Joi.number() ,
            assignedPerson : Joi.objectId() , 
            applicants: Joi.array().items(Joi.objectId()), 
        }

        return Joi.validate(request, updateSchema)
    }, 
}