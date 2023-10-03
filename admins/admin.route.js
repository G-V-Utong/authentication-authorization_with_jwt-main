const express = require("express")
const middleware = require("./admin.middleware")
const controller = require("./admin.controller")


const adminRouter = express.Router()

adminRouter.post("/", middleware.validateInfo, controller.createAdmin)


module.exports = adminRouter