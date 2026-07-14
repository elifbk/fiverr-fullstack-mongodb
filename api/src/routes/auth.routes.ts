import express from "express"
import { login, logout, profile, register } from "../controllers/auth.controller.js"
import upload from "../utils/multer.js"
import protect from "../middlewares/protect.js"
import { authLimiter, globalLimiter } from "../utils/rate-limit.js"


const router = express.Router()

router.route("/register").post(authLimiter, upload.single("profilePicture"), register)
router.route("/login").post(authLimiter, login)
router.route("/logout").post(authLimiter, logout)
router.route("/profile").get(globalLimiter, protect, profile)

export default router