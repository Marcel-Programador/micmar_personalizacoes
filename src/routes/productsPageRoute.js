const express = require("express");
const router = express.Router();
const ProductsPageController = require("../controllers/ProductsPageController");

router.get("/:category", ProductsPageController.products);

module.exports = router;