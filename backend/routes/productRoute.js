const express = require("express");
const { getAllProducts } = require("../controllers/productController");
const router = express.Router();

router.get("/products").get(getAllProducts)

module.exports = router