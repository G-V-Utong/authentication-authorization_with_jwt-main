
const mongoose = require ("mongoose")
require("dotenv").config()

function connect(){
    mongoose.connect(process.env.DB_URL)

    mongoose.connection.on("connected", ()=>{
        console.log("database connected successfully")
    })

    mongoose.connection.on("error", (err)=>{
        console.log("database connection failed", err)
    })
}

module.exports = {connect}





















// const mongoose = require("mongoose")
// require("dotenv").config()

// function connectToDatabase(){
//     mongoose.connect(process.env.DB_URl)

//     mongoose.connection.on("connected", ()=>{
//         console.log("database connected")
//     })

//     mongoose.connection.on("error", (err)=>{
//         console.log("database connection failed",err)
//     })
// }

// module.exports = {connectToDatabase}