import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  name: string | null;
  email: string | null;
  is_admin: boolean;
  setToken: (token: string) => void;
  setUser: (name: string, email: string, is_admin: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  accessToken: null,
  name: null,
  is_admin: false,
  email: null,
  setToken: (token: string) => set({ accessToken: token }),
  setUser: (name: string, email: string, is_admin: boolean) =>
    set({ name: name, email: email, is_admin: is_admin }),
  logout: () =>
    set({ accessToken: null, name: null, email: null, is_admin: false }),
}));
