const express = require("express");
const router = express.Router();
const ProductsEditController = require("../controllers/ProductsEditController");
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

router.get("/productActionChange/edit/:id?", ProductsEditController.viewEditProduct);
router.put("/product/:id", upload.single("avatar"), ProductsEditController.editedProduct);

module.exports = router;