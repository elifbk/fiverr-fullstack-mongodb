import { isDevelopment } from "../config/environment.js"
import { BaseError } from "../utils/errors.js"
import type { Request, Response, NextFunction } from "express"
import type { ErrorResponse } from "./../types/index.js"

const errorHandler = (err: BaseError, req: Request, res: Response, next: NextFunction) => {
    // bilinmeyen hata meydana geldiğinde
    if (!(err instanceof BaseError)) {
        console.log("❓ Bilinmeyen Hata", err)

        err = new BaseError("Beklenmeyen bir hata oluştu", 500, "INTERNAL_SERVER_ERROR")
    }

    // gönderilecek yanıtı hazırla
    const response: ErrorResponse = {
        status: "error",
        message: err.message,
        code: err.errorCode
    }

    if (isDevelopment) {
        response.stack = err.stack as string
    }

    res.status(err.statusCode).json(response)
}

export default errorHandler