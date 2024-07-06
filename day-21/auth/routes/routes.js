import { Router } from "express";
import healthController from "../controllers/health.js";
import authController from "../controllers/auth.js";

const router = Router();

router.get("/", healthController.getHealth);
router.post("/", healthController.postHealth);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

export default router;
