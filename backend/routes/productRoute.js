const express = require("express");
const { getAllProducts , createProduct } = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProducts)
router.route("/products/new").post(createProduct);

//Notes 
console.log("Printing the value  Router here start");
console.log(router.route);
console.log("Printing the value of Router here end ")

module.exports = router