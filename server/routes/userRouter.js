import express from "express";
import { register, login, logout } from "../controllers/userController.js";  // Named imports

const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.post("/logout", logout);


export default router;
