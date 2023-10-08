const express = require("express");
const { getAllProducts , createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProducts)
router.route("/products/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);
//Notes 
console.log("Printing the value  Router here start");
console.log(router.route);
console.log("Printing the value of Router here end ")

module.exports = router