import { create } from "zustand";
import * as AuthService from './auth.api';
import { User } from "@/model/user";

export interface AuthState {
    user: User | null;
    isLogged: boolean;
    error: boolean;
    ruolo: string | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    error: false,
    user: null,
    isLogged: false,
    ruolo: null,
    login: async (username, password) => {
        set({ isLogged: false, error: false, ruolo: null });
        try {
            const isValidCredentials = await AuthService.isLogged(username, password);
            if (isValidCredentials) {
                const user = await AuthService.login(username, password);
                set({ isLogged: true, user, ruolo: user.ruolo });
            } else {
                set({ error: true, isLogged: false, ruolo: null });
            }
        } catch (e) {
            set({ error: true, isLogged: false, ruolo: null });
            throw e;
        }
    },
    logout: () => {
        set({ isLogged: false, user: null, ruolo: null });
    }
}));