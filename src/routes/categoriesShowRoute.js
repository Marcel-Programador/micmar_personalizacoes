const express = require("express");
const router = express.Router();
const CategoriesShowController = require("../controllers/CategoriesShowController");

router.get("/categoryActionChange/show/:id?", CategoriesShowController.viewShowCategory);

module.exports = router;