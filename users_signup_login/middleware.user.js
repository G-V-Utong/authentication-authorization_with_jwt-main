const joi = require("joi")

const validateUser = async (req, res, next)=>{
    try{
        const userSchema = joi.object({
            username:joi.string().empty().required().messages({"string.base":`"name" must be of type "text"`,"string.empty":`"name" can not be empty`,"string.required": `"name" is required `}),
            password:joi.string().empty().required().min(8).messages({"string.base":`"password" must be of type "text"`,"string.empty":`"password" can not be empty`,
            "string.required": `"name" is required `,"string.min":`"password" should have a minimum length of {8}`}),
            email:joi.string().empty().email().required().messages({"string.base":`"email" must be of type "text"`,"string.empty":`"email" can not be empty`,"string.required": `"email" is required`}),
            phone_number:joi.string().empty().required().messages({"string.base":`"phone_number" must be of type "text"`,"string.empty":`"phone_number" can not be empty`,"string.required":`"phone_number" is required ` }),
            gender:joi.string().empty().valid("male","female"),
            address:joi.string().empty().required().messages({"string.base":`"address" must be of type "text"`,"string.empty":`"address" can not be empty`,"string.required": `"address" is required `}),
            city:joi.string().empty().required().messages({"string.base":`"city" must be of type "text"`,"string.empty":`"city" can not be empty`,"string.required":`"city" is required ` }),
            state:joi.string().empty().required().messages({"string.base":`"state" must be of type "text"`,"string.empty":`"state" can not be empty`,"string.required":`"state" is required ` }),
            country:joi.string().empty().required().messages({"string.base":`"country" must be of type "text"`,"string.empty":`"country" can not be empty`,"string.required":`"country" is required ` })
            
        })

        await userSchema.validateAsync(req.body, {abortEarly:true})
        next()
    }
    catch(error){
        res.status(422).json({
            message:"invalid information",
            "error":error.message
        })
    }
}


const validateLogInfo = async (req, res, next)=>{
   try{const userSchema = joi.object({
        email:joi.string().email().empty().required().messages({"string.base":`"email" must be of type string`,
        "string.required":`"email" is required`,"string.empty":`"email" can not be empty`}),
        password:joi.string().empty().required().messages({"string.base":`"password" must be of type string`,
        "string.required":`"password" is required`,"string.empty":`"password" can not be empty`})
    })

    await userSchema.validateAsync(req.body, {abortEarly:true})
    next()
    }
    catch(error){
       res.status(422).json({
        message:"invalid information",
        error:error.message
       })
    }
}

module.exports = {validateUser, validateLogInfo}