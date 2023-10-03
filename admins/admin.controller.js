const AdminModel = require("../models/admin")
const UserModel = require("../models/user")

const createAdmin = async (req,res)=>{
    let adminInfo = req.body
    const existingUser = await UserModel.findOne({
        email:adminInfo.email
    })
    if(!existingUser){
        return res.status(422).json({
            message:"you are not a user"
        })
    }
        
    const existingAdmin = await AdminModel.findOne({
        email:adminInfo.email
    })

    if(existingAdmin){
        return res.status(409).json({
            message:"You are already an admin"
        })
    }

    const newAdmin = await AdminModel.create(adminInfo)
    return res.status(200).json({
        message:"You are successfully created as admin",
        newAdmin
    })
}

module.exports = {createAdmin}