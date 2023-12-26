
import { URL_AUTH } from "../operators/UserEndpoint";
import axios from "axios";
import { User } from "@/model/user";

export function login(username: string, password: string) {
    return axios.post<User>(`${URL_AUTH}/${username}/${password}`)
        .then(res => res.data);
}

export function getUser(username: string, password: string): Promise<User> {
    return axios.post<User>(`${URL_AUTH}/${username}/${password}`)
        .then(res => res.data);
}

export function isLogged(username: string, password: string): Promise<boolean> {
    // Effettua una chiamata API per verificare le credenziali dell'utente
    return axios.post<boolean>(`${URL_AUTH}/${username}/${password}`)
        .then(res => res.data);
}