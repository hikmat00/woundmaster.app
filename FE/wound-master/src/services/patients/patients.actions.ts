import {Patient} from "@/model/patient";

export type PatientsGetSuccess = { type: 'patientsGetSuccess', payload: Patient[]};
export type PatientDeleteSuccess = { type: 'patientDeleteSuccess', payload: number};
export type PatientAddSuccess = { type: 'patientAddSuccess', payload: Patient};
export type PatientEditSuccess = { type: 'patientEditSuccess', payload: Patient};

export type PatientSetActive = { type: 'patientSetActive', payload: Partial<Patient> | null};

export type Error = { type: 'error', payload: string};
export type Pending = { type: 'pending', payload: boolean};

export type PatientsActions =
    PatientsGetSuccess |
    PatientDeleteSuccess |
    PatientAddSuccess |
    PatientEditSuccess |
    PatientSetActive |
    Error |
    Pending;