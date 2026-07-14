import rateLimit from "express-rate-limit"

export const authLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 10
})

export const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50
})