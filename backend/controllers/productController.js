const Product = require("../models/Product");

const getProducts = async(req , res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};



const createProduct = async(req , res)=>{
    try {
        const product = new Product(req.body);
        const saveProduct = await product.save();
        res.status(201).json(saveProduct);

    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports ={getProducts , createProduct};