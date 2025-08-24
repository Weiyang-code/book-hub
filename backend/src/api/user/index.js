import express from "express";
import * as userController from "./controller.js";

const router = express.Router();

router.get("/", userController.getUser);

router.post("/register", userController.registerUser);

export default router;
