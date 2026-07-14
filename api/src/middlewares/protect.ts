import type { Request, Response, NextFunction } from "express"
import { Forbidden } from "../utils/errors.js"
import jwt from "jsonwebtoken"
import { config } from "../config/environment.js"
import User from "../models/user.model.js"

// Client'tan gelen JWT tokenı üzerinden kullanıcının kimliğini doğrulayacak middleware
// Eğer token geçerliyse sonraki adıma geçmeye izin verilmeli
// Eğer token geçersizse yetkilendirme hatası fırlatılmalı

const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // çerezlerle gelen token'a eriş
    const token = req.cookies.token

    // token yoksa hata gönder
    if (!token) return next(new Forbidden())

    // token varsa geçerli mi kontrol et
    let payload: any;

    try {
        payload = jwt.verify(token, config.JWT_SECRET);

    } catch (error) {
        throw new Forbidden()
    }


    // token geçerliyse kullanıcı hesabını veritabanında ara
    const user = await User.findById(payload.id)

    // kullanıcı hesabı silindiyse
    if (!user) return next(new Forbidden("Bu hesap artık kullanım dışı"));

    // kullanıcı bilgilerini bu mw'den sonra çalışacak fonksiyona aktar
    (req.user as any) = user;

    next();
};

export default protect