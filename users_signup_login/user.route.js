const express = require("express")
const middleware = require("./middleware.user")
const controller = require("./controler.user")

const userRouter = express.Router();

userRouter.post("/signUp", middleware.validateUser, controller.createUser)

userRouter.post("/login", middleware.validateLogInfo, controller.login)

module.exports = userRouter
