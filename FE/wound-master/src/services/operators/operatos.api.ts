import axios from "axios";
import {User} from "@/model/user";
import {ADD_URL, EDIT_URL, URL_ALL_USERS, URL_AUTH, URL_DELETE} from "./UserEndpoint";

//GET ALL USERS
export function getAllUsers() {
    return axios.get<User[]>(URL_ALL_USERS);
}

//DELETE BY ID
export function remove(id: number) {
    return axios.delete(`${URL_DELETE}/${id}`);
}

//ADD
export function add(user: Partial<User>) {
    return axios.post(ADD_URL,user);
}

//EDIT
export function edit(operator: Partial<User>) {
    return axios.put(`${EDIT_URL}/${operator.id}`, operator);
}
