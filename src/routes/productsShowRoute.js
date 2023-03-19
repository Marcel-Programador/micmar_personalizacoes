const express = require("express");
const router = express.Router();
const ProductsShowController = require("../controllers/ProductsShowController");

router.get("/productActionChange/show/:id?", ProductsShowController.viewShowProduct);

module.exports = router;