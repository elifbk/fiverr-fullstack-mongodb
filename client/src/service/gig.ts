

// hizmetler için api istekleri

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { FilterParams, GetAllGigRes, GetOneGigRes } from "../types";
import api from "./axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const gigService = {
    getAll: (params?: FilterParams) => api.get<GetAllGigRes>("/gigs", { params }),
    getOne: (id: string) => api.get<GetOneGigRes>(`/gigs/${id}`),
    create: (body: FormData) => api.post<GetOneGigRes>("/gigs", body),
    delete: (id: string) => api.delete(`/gigs/${id}`)
}

export const useGetAllGigs = (params?: FilterParams) => useQuery({
    queryKey: ["gigs", params],
    queryFn: () => gigService.getAll(params),
    select: (res) => res.data.data
})

export const useGetoneGig = (id: string) => useQuery({
    queryKey: ["gig", id],
    queryFn: () => gigService.getOne(id),
    select: (res) => res.data.data
})

export const useCreateGig = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: gigService.create,
        onSuccess: (res) => {
            navigate(`/detail/${res.data.data.id}`)
            toast.success("Service created")
        },
        onError: (err) => {
            toast.error(err.message || "An error occurred.")
        }
    })
}

export const useDeleteGig = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: gigService.delete,
        onSuccess: () => {
            toast.success("Service deleted.")
            // arayüzün güncellenmesi için useGetAllGigs sorgusunu tekrar çalıştır
            client.invalidateQueries({ queryKey: ["gigs"] })
        },
        onError: (err) => {
            toast.error(err.message || "An error occurred.")
        }
    })
}


