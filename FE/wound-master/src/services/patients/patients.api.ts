import {Patient} from "@/model/patient";
import axios from "axios";
import {ADD_URL, EDIT_URL, URL_DELETE, URL_LIST} from "@/services/patients/PatientEndpoint";

//list
export function getList(){
    return axios.get<Patient[]>(URL_LIST);
}

//DELETE BY ID
export function remove(id: number) {
    return axios.delete(`${URL_DELETE}/${id}`);
}

//ADD
export function add(patient: Partial<Patient>) {
    return axios.post(ADD_URL,patient);
}

//EDIT
export function edit(patient: Partial<Patient>) {
    return axios.put(`${EDIT_URL}/${patient.id}`, patient);
}