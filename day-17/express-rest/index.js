import express from "express";
import { getHealth, getPrivate, postHealth } from "./controller/health.js";
import logger from "./middleware/logger.js";
import isVerifiedUser from "./middleware/isVerifiedUser.js";

const app = express();
const PORT = 8080;

// middleware to parse incoming request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.get("/health", getHealth);
app.post("/health", postHealth);
app.get("/private", isVerifiedUser, getPrivate);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
