import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AuthResponse, LoginData, RegisterData } from "../types";
import api from "./axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const autService = {
    register: (body: RegisterData) =>
        api.post<AuthResponse>("/auth/register", body, {
            headers: { "Content-Type": "multipart/form-data" },
        }),
    login: (body: LoginData) => api.post<AuthResponse>("/auth/login", body),
    logout: () => api.post("/auth/logout"),
    profile: () => api.get<AuthResponse>("/auth/profile"),
};

// kayıt için kullanılacak mutasyon
export const useRegister = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: autService.register,
        onSuccess: () => {
            navigate("/login");
            toast.success("Your account has been created; you can log in.");
        },
        onError: () => {
            toast.error("An error occurred during the registration process.");
        },
    });
};

// giriş yapmak için kullanılacak mutasyon
export const useLogin = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: autService.login,
        onSuccess: () => {
            navigate("/");
            toast.success("You have logged in.");
            // profil sorgusunu tekrar yap
            queryClient.invalidateQueries({ queryKey: ["profile"] });
        },
        onError: () => {
            toast.error("An error occurred during the login process.");
        },
    });
};

// çıkış yapmak için kullanılacak mutasyon
export const useLogout = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: autService.logout,
        onSuccess: () => {

            // profil verisinin cache'ini temizle
            const resetCache = () => {
                queryClient
                    .getQueryCache()
                    .findAll({ queryKey: ["profile"] })
                    .forEach((query) => query.setData(undefined));
            };

            resetCache()

            navigate("/login");
            toast.success("Logged out");
        },
        onError: () => {
            toast.error("An error occurred while logging out.");
        },
    });
};

// profil verilerini almak için query
export const useProfile = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["profile"],
        queryFn: autService.profile,
        staleTime: 0,
        retry: false,
        select: (res) => res.data.user,
    });

    return { isLoading, error, user: data };
};
