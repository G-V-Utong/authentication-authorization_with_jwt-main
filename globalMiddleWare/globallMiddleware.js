const adminModel = require("../models/admin");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user")


const checkAdmin = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(401).json({
        message: "You are not authenticated. Please enter your token",
      });
    }

    const token = bearerToken.split(" ")[1];

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    const admin = await adminModel.findOne({
      email: decoded.email,
    });
    if (!admin) {
      return res.status(403).json({
        message: "You are not authorized. Only an admin can make this request",
      });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "You are not authorized",
      error: error.message,
    });
  }
};

const authenticateUser = async (req,res,next)=>{
  try{
    const bearerToken = req.headers.authorization
    if(!bearerToken){
      return res.status(401).json({
        message:"Token required. Please try again.",
      })
    }
    const token = bearerToken.split(" ")[1]
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    const foundUser = await userModel.findOne({email:decoded.email})
    if(!foundUser){
      return res.status(401).json({
        message:"You are not authenticated. Please try again."
      })
    }
    next()
  }catch(error){
      return res.status(401).json({
      error:error.message
    })
  }
}

module.exports = { checkAdmin, authenticateUser };
