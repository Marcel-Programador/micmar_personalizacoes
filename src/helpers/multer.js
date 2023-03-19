const multer = require("multer");
const uploadConfig = require("../config/upload");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadConfig.path);
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split(".")[1];
    cb(null, `.${extension}`);
  },
});
const upload = multer({ storage });

module.exports = upload;