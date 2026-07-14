import mongoose from "mongoose";
import express from "express";
import { config } from "./config/environment.js";
import authRoutes from "./routes/auth.routes.js"
import errorHandler from "./middlewares/error-handler.js";
import { NotFound } from "./utils/errors.js";
import cookieParser from "cookie-parser";
import gigRoutes from "./routes/gig.routes.js"
import rateLimit from "express-rate-limit";
import { globalLimiter } from "./utils/rate-limit.js";
import cors from "cors"

mongoose.connect(config.MONGO_URI)
    .then(() => console.log("🟢 MondoDB'ye Bağlandı"))
    .catch(() => console.log("❌ Veritabanına Bağlanamadı"))


const app = express()

app.use(cors({ origin: config.CLIENT_URL, credentials: true }))
app.use(express.json())
app.use(cookieParser())



app.use("/api/auth", authRoutes)
app.use("/api/gigs", globalLimiter, gigRoutes)

// 404 route'u
app.use((req, res, next) => next(new NotFound()))

// global hata mw'i
app.use(errorHandler)

app.listen(config.PORT, () => console.log(`🟠 Server ${config.PORT} portunu dinlemeye başladı`))