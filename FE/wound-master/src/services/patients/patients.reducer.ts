import {Patient} from "@/model/patient";
import {PatientsActions} from "@/services/patients/patients.actions";

export interface PatientState {
    patients: Patient[];
    activeItem: Partial<Patient> | null;
    pending: boolean;
    error: string | null;
}

export const initialState: PatientState = {
    patients: [],
    activeItem: null,
    pending: false,
    error: null
};

export function patientsReducer(state: PatientState, action: PatientsActions) {
    const{type, payload} = action;

    switch (type) {
        case 'patientsGetSuccess':
            return {...state, pending: false, error: null, patients: payload}
        case 'patientDeleteSuccess':
            return {
                ...state,
                patients: state.patients.filter(item =>item.id !== payload),
                error: null,
                pending:false,
                activeItem: null,
            };
        case 'patientAddSuccess':
            return {
                ...state,
                patients: [...state.patients, payload],
                activeItem: null,
                error: null,
                pending: false,
            };
        case 'patientEditSuccess':
            return {
                ...state,
                patients: state.patients.map(item => item.id === payload.id ? payload: item),
                error: null,
                pending: false,
            };
        case 'patientSetActive':
            return {
                ...state,
                activeItem: payload
            };
        case 'pending':
            return {...state, pending: payload, error: null};
        case 'error':
            return {...state, error: payload, pending: false}
    }
    return state;
}

