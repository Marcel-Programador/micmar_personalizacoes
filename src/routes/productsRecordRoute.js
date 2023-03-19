const express = require("express");
const router = express.Router();
const ProductsRecordController = require("../controllers/ProductsRecordController");
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

router.get("/product", ProductsRecordController.viewProduct);
router.post("/recorded", upload.single("avatar"), ProductsRecordController.recordedProduct);

module.exports = router;