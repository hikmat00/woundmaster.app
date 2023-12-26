import {AuthState} from "@/services/auth/useAuth";

export const selectAuthRuolo = (state: AuthState) => state.ruolo;
export const selectAuthError = (state: AuthState) => state.error;
export const selectAuthIsLogged = (state: AuthState) => state.isLogged;
