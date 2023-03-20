const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/:id", ProductController.productShow);

module.exports = router;