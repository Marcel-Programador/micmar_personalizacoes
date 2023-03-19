const express = require("express");
const router = express.Router();
const UsersDeleteController = require("../controllers/UsersDeleteController");
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

router.get("/userActionChange/delete/:id?", UsersDeleteController.viewDeleteUser);
router.put("/user/:id", upload.single("avatar"), UsersDeleteController.deletedUser);

module.exports = router;