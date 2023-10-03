const express = require("express")
require("dotenv").config()
const bodyParser = require('body-parser')
const userRoute = require("./users_signup_login/user.route")
const adminRoute = require("./admins/admin.route")
const productRoute = require("./products/product.route")

const {connect} = require ("./config/mongoose")

const PORT = process.env.PORT

const app = express()

connect()

app.use(bodyParser.json())
app.use("/users", userRoute)
app.use("/admins", adminRoute)
app.use("/products", productRoute)



app.listen(PORT, ()=>{
    console.log(`app listening at http://localhost:${PORT}`)
})





















// const {connectToDatabase} = require("./config/mongoose")
// const bodyParser = require('body-parser')
// const Seller = require("./models/seller")
// const userRoute = require("./users/user.route")
