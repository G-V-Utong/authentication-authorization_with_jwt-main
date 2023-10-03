const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema ({
    productName:{
        type:String,
        required:true
    },
    description:String,
    price:{
        type:Number,
        required:true
    },
    size:Number,
    color:{
        type:String,
        default:null
    },
    quantityPerUnit:{
        type:Number,
        default:null
    },
    salesPersonInfo:[{type:Schema.Types.ObjectId, ref:"salesPeople"}]

})

module.exports = mongoose.model("products", productSchema)