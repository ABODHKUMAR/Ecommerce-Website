// const productModel = require("../models/productModel");
const Product = require("../models/productModel");





// Create Product --Admin
exports.createProduct = async (req,res,next)=>
{
   const product = await Product.create(req.body);
   
   res.status(201).json({
     sucess:true,
     product
   })
}

// Get All Products

exports.getAllProducts = async (req, res) => {
    const products= await Product.find();

    res.status(200).json({ 
        sucess:true,
        products
     });
}

//Update Product -- Admin

exports.updateProduct =async (req,res)=>{
   let product =await Product.findById(req.params.id);
   if(!product)
   {
      return res.status(500).json({
         sucess:false ,
         message : "Product not found" ,
      })
   }
   console.log(product);
   product = await Product.findByIdAndUpdate(req.params.id,req.body,{
      new : true,
      runValidators:true,
      useFindAndModify:false
   });
  console.log(product);
   res.status(200).json({
      sucess:true,
      product
   })


}

//Delete Product

exports.deleteProduct = async(req,res,next)=>
{
   const product = await Product.findById(req.params.id);

   if(!product)
   {
      return res.status(500).json({
         success : false ,
         message: "Product not found" ,
      })
   }

   await product.deleteOne({ _id: req.params.id });

   res.status(200).json({
      success:true,
      message:"Product Deleted Sucessfully",
   })

}

// Get Products Details

exports.getProductDetails = async(req,res,next)=>
{
   const product = await Product.findById(req.params.id);

   if(!product)
   {
      return res.status(500).json({
         success : false ,
         message: "Product not found" ,
      })
   }


   res.status(200).json({
      success:true,
      product
   })

}