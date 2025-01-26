import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { getMessages, getUsersForSidebar } from "../controller/messageController.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute);

export default router;