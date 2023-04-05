const express = require("express");
const router = express.Router();
const CategoriesRecordController = require("../controllers/CategoriesRecordController");
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

router.get("/category", CategoriesRecordController.viewCategory);
router.post("/recorded/", CategoriesRecordController.recordedCategory);

module.exports = router;