import {create} from "zustand";

interface AuthState {
    accessToken:string | null;
    name:string | null;
    is_admin:boolean;
    setToken: (token:string) => void;
    setUser: (name:string, is_admin:boolean) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    accessToken: null,
    name: null,
    is_admin: false,
    setToken: (token: string) => set({accessToken: token}),
    setUser: (name: string, is_admin: boolean) => set({name: name, is_admin: is_admin}),
    logout: () => set({accessToken: null, name: null, is_admin: false})
}))