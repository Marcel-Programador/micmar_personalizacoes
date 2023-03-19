const express = require("express");
const router = express.Router();
const AdmPageController = require("../controllers/AdmPageController");

router.get("/admPage/show", AdmPageController.viewAdmPage);

module.exports = router;