const productModel = require("../models/product")

const createProduct = async (req,res)=>{
    const productInfo = req.body
    const newProduct = await productModel.create(productInfo)
    res.status(200).json(newProduct)
}

const getAllProducts = async(req, res)=>{
    const allProducts = await productModel.find()
    res.status(200).json(allProducts)
}

module.exports = {createProduct, getAllProducts}