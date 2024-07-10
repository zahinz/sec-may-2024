import express from "express";
import healthController from "./controllers/health.js";
import dotenv from "dotenv";
import uploadImage from "./controllers/uploadImage.js";
import upload from "./middleware/multer.js";
import "./database/index.js";
import listAllImages from "./controllers/listAllImages.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static("public"));

// new static files for uploads
app.use("/uploads", express.static("uploads"));

// suppose to be in the folder routes
app.get("/", healthController.getHealth);
app.post("/", healthController.postHealth);
app.post("/upload", upload.single("image"), uploadImage);
app.get("/images", listAllImages);

app.listen(PORT, () => {
  const name = process.env.npm_package_name;
  const version = process.env.npm_package_version;
  const message = `${name} ${version} is running on port ${PORT}`;
  console.log(message);
});
