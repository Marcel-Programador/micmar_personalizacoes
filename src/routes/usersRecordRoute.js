const express = require("express");
const router = express.Router();
const UsersRecordController = require("../controllers/UsersRecordController");
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

router.get("/user", UsersRecordController.viewUsers);
router.post("/recorded", upload.single("avatar"), UsersRecordController.recordedUser);

module.exports = router;