const userModel = require("../models/user")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const createUser = async (req, res)=>{
    const userInfo = req.body
    const existingUser = await userModel.findOne({email:userInfo.email})
    if(existingUser){
      return res.status(409).json({
            message:"user already exist"
        })
    }
    const newUser = await userModel.create({
        username:userInfo.username,
        password:userInfo.password,
        email:userInfo.email,
        phone_number:userInfo.phone_number,
        gender:userInfo.gender,
        address:userInfo.address,
        city:userInfo.city,
        state:userInfo.state,
        country:userInfo.country
    })

    const token = jwt.sign({email:newUser.email, _id:newUser._id}, process.env.JWT_SECRET, {expiresIn:"2h"})

    res.status(200).json({
        message:"signup successful",
        newUser,
        token
    })
}

const login = async (req,res)=>{
    const userLoginInfo = req.body
    const existingUser = await userModel.findOne({email:userLoginInfo.email})
    if(!existingUser){
      return res.status(404).json({
            message:"User are not found. Please sign up",
        })
    }

    const validPassword = await existingUser.isValidPassword(userLoginInfo.password)
    if(!validPassword){
      return  res.status(422).json({
            message:"email or password is incorrect",
        })
    }

    const token = await jwt.sign({email:existingUser.email, _id:existingUser._id},process.env.JWT_SECRET,{expiresIn:"1h"})
    
    return res.status(200).json({
        message:"Login successful",
        token,
        existingUser
    })
}

module.exports = {createUser, login}