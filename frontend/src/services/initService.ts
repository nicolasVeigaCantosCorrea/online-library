import { useAuthStore } from '../store/authStore';
import type { User } from '../types/user';
import { refreshRequest } from './authService';
import { getCurrentUser } from './userService';
import { getFavorites } from '../services/userService';

export async function initAuth() {
  try {
    const res = await refreshRequest();
    useAuthStore.getState().setToken(res.access_token);

    const user: User = await getCurrentUser();
    useAuthStore.getState().setUser(user);

    await loadFavoritesIntoStore(); // awaited — favorites ready before app continues
  } catch {
    useAuthStore.getState().logout();
  }
}

export async function loadFavoritesIntoStore() {
  try {
    const res = await getFavorites();
    useAuthStore.getState().setFavorites(res.data ?? res);
  } catch {
    useAuthStore.getState().setFavorites([]);
  }
}
