const express = require("express");
const router = express.Router();
const UsersEditController = require("../controllers/UsersEditController");
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

router.get("/userActionChange/edit/:id?", UsersEditController.viewEditUser);
router.put("/user/:id", upload.single("avatar"), UsersEditController.editedUser);

module.exports = router;