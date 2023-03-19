const express = require("express");
const router = express.Router();
const CategoriesDeleteController = require("../controllers/CategoriesDeleteController");
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

router.get("/categoryActionChange/delete/:id?", CategoriesDeleteController.viewDeleteCategory);
router.put("/category/:id", CategoriesDeleteController.deletedCategory);

module.exports = router;