import express from "express";
import {
  login,
  logout,
  signup,
  update,
  checkAuth,
} from "../controller/authController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update", protectRoute, update);
router.get("/check", protectRoute, checkAuth);

export default router;
