import {useReducer} from "react";
import * as api from "@/services/patients/patients.api";
import {User} from "@/model/user";
import {initialState, patientsReducer} from "@/services/patients/patients.reducer";
import {Patient} from "@/model/patient";


export function usePatientsService() {
    const [state, dispatch] = useReducer(patientsReducer, initialState);

    async function getPatients() {
        dispatch({type: 'pending', payload: true});

        try {
            const res = await api.getList();
            dispatch({type: 'patientsGetSuccess', payload: res.data})
        } catch (e) {
            dispatch({type: 'error', payload: 'Patients not loaded'})
        }
    }

    async function deletePatient(id: number) {
        dispatch({type: 'pending', payload: true});

        try {
            await api.remove(id);
            dispatch({type: 'patientDeleteSuccess', payload: id})
        } catch (e) {
            dispatch({type: 'error', payload: 'Patient not deleted'})
        }
    }

    async function addPatient(patient: Partial<Patient>) {
        dispatch({type: 'pending', payload: true})
        try {
            const res = await api.add(patient);
            dispatch({type: 'patientAddSuccess', payload: res.data})
        } catch (e) {
            dispatch({type: 'error', payload: 'Patient not added'})
        }
    }

    async function editPatient(patient: Partial<Patient>) {
        dispatch({type: 'pending', payload: true})

        try {
            const res = await api.edit(patient);
            dispatch({type: 'patientEditSuccess', payload: res.data})

        } catch (e) {
            dispatch({type: 'error', payload: 'Patient not edited'})
        }
    }

    function setActiveItem(patient: Patient | {}) {
        dispatch({type: 'patientSetActive', payload: patient})
    }

    function resetActiveItem() {
        dispatch({type: 'patientSetActive', payload: null})
    }

    return {
        actions: {
            getPatients,
            deletePatient,
            addPatient,
            editPatient,
            setActiveItem,
            resetActiveItem
        },
        state
    }

}


