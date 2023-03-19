const express = require("express");
const router = express.Router();
const CategoriesActionChangeController = require("../controllers/CategoriesActionChangeController");
const path = require("path");
const multer = require("multer");

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        const imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
});

const upload = multer({storage: multerDiskStorage});

router.get("/categoryActionChange", CategoriesActionChangeController.viewCategory);

module.exports = router;