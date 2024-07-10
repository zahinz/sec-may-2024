import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const randomString = crypto.randomBytes(10).toString("hex");
    const fileName = `${Date.now()}-${randomString}${path.extname(
      file.originalname
    )}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

export default upload;
