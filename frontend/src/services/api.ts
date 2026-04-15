import axios from "axios"
import {useAuthStore} from "../store/authStore";
import {refresh} from "./authService";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().accessToken;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            try {
                const token = await refresh();
                useAuthStore.getState().setToken(token.access_token);
                return api(error.config);
            } catch {
                console.error("Demande non autorisée, redirection vers page de connection...");
                useAuthStore.getState().logout();
            }

        }
        return Promise.reject(error);
    });

export default api;