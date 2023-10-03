const express = require ("express")
const middleware = require("./product.middleware")
const controller =  require("./product.controller")
const globallMiddleWare = require("../globalMiddleWare/globallMiddleware")

const productRouter = express.Router()

productRouter.post("/", middleware.validateProduct, globallMiddleWare.checkAdmin, controller.createProduct)

productRouter.get("/", globallMiddleWare.authenticateUser, controller.getAllProducts)

module.exports = productRouter