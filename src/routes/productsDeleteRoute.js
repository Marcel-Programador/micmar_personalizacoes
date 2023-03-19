const express = require("express");
const router = express.Router();
const ProductsDeleteController = require("../controllers/ProductsDeleteController");
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

router.get("/productActionChange/delete/:id?", ProductsDeleteController.viewDeleteProduct);
router.put("/product/:id", upload.single("avatar"), ProductsDeleteController.deletedProduct);

module.exports = router;