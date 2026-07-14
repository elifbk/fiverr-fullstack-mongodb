import type { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catch-async.js";
import { Forbidden, NotFound } from "../utils/errors.js";
import uploadToCloud from "../utils/upload-to-cloud.js";
import type { Filters, ImagesFiles, Query } from "../types/index.js";
import Gig from "../models/gig.model.js";

const buildFilters = (query: Query): Filters => {
    const filters: Filters = {}

    if (query.category) filters.category = query.category
    if (query.userId) filters.user = query.userId
    if (query.min || query.min) {
        filters.packagePrice = {}

        if (query.min) filters.packagePrice.$gte = Number(query.min)
        if (query.max) filters.packagePrice.$lte = Number(query.max)
    }

    if (query.search) filters.title = {
        $regex: query.search, $options: "i" // insensitive : büyük küçük harf duyarlılığını kaldırır
    }


    return filters

    // {
    //     category: 'Programming',
    //     user: '6a2fdb95646c1bdb015667d0',
    //     packagePrice: { '$gte': '200', '$lte': '500' },
    //     title: { '$regex': 'Standard Package', '$options': 'i' }
    //   }
}

export const getAllGigs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const filters = buildFilters(req.query)

    const gigs = await Gig.find(filters).populate("user")

    res.status(200).json({ message: "Hizmetler listelendi", results: gigs.length, data: gigs })
})

export const getOneGig = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const gig = await Gig.findById(req.params.id).populate("user");

    if (!gig) return next(new NotFound())

    res.status(200).json({ message: "Hizmet verisi bulundu", data: gig })
})

export const createGig = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // istek atan kullanıcı satıcı değilse yetkin yok hatası döndür
    if (!req.user.isSeller) return next(new Forbidden)

    // console.log(req.files)
    // console.log(req.files.coverImage[0].path)

    // dosyaların tipini tanımla
    const files = req.files as unknown as ImagesFiles

    // kapak fotoğrafını cloudinary'e yükle
    const coverImage = await uploadToCloud(next, files.coverImage[0]!.path, "gig-images", 900, 600, "image")

    // diğer fotoğrafları cloudinary'e yüklemek için istekleri oluştur
    const promises = files.images.map((image) => uploadToCloud(next, image.path, "gig-images", 900, 600, "image"))

    // oluşturulan sorguları aynı anda çalıştır
    const images = await Promise.all(promises)

    // cloud'a yüklenen resimlerin url'lerini body'e ekle
    req.body.coverImage = coverImage.secure_url
    req.body.images = images.map((image) => image.secure_url)

    // özellikler (packageFeatures) metnini diziye çevir
    req.body.packageFeatures = req.body.packageFeatures.split(",")

    // yeni hizmet belgesi oluştur
    const savedGig = await Gig.create({ ...req.body, user: req.user._id })

    res.status(201).json({ message: "Hizmet başarıyla oluşturuldu", data: savedGig })
})

export const deleteGig = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const gig = await Gig.findById(req.params.id)

    if (!gig) return next(new NotFound())

    // silmek isteyen kişi ile hizmeti oluşturan kişi aynı mı
    if (String(gig.user) !== String(req.user._id)) return next(new Forbidden())

    // hizmeti sil
    await Gig.findByIdAndDelete(req.params.id)

    res.status(204).json({ message: "Hizmet kaldırıldı" })
})