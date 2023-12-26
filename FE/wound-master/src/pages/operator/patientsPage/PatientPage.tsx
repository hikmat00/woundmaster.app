import {ServerError, Spinner} from "@/shared/";
import {usePatientsService} from "@/services/patients";
import {PatientList} from "./PatientsList";
import {useEffect} from "react";
import {CMSOperatorForm} from "../../admin/operatorsPage/CMSOperatorForm";
import {CMSPatientForm} from "./CMSPatientForm";

export function PatientPage(){
    const {state, actions} = usePatientsService();

    useEffect(() => {
        actions.getPatients();
    }, [state.activeItem])

    return (
        <div>
            <h1 className="title">Pazienti</h1>

            {state.pending && <Spinner/>}
            {state.error && <ServerError message={state.error}/>}

            <CMSPatientForm
                activeItem={state.activeItem}
                onCLose={actions.resetActiveItem}
                onAdd= {actions.addPatient}
                onEdit={actions.editPatient}
            />

            <PatientList
                items={state.patients}
                activeItem={state.activeItem}
                onEditItem={actions.setActiveItem}
                onDeleteItem={actions.deletePatient}
            />

        </div>
    )
}