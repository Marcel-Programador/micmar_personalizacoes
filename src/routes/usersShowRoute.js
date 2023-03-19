const express = require("express");
const router = express.Router();
const usersShowController = require("../controllers/usersShowController");

router.get("/userActionChange/show/:id?", usersShowController.viewShowUser);

module.exports = router;