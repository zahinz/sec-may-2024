import { Router } from "express";
import healthController from "../controllers/health.js";
import authController from "../controllers/auth.js";
import privacyController from "../controllers/privacy.js";
import isAuth from "../middlewares/isAuth.js";

const router = Router();

router.get("/", healthController.getHealth);
router.post("/", healthController.postHealth);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/public", privacyController.publicPath);
router.get("/private", isAuth, privacyController.privatePath);

export default router;
