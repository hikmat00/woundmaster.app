import {useOperatorsService} from "@/services/operators";
import {useEffect} from "react";
import {ServerError, Spinner} from "@/shared/";
import {OperatorsList} from "./OperatorsList";
import {CMSOperatorForm} from "./CMSOperatorForm";


export function Operators() {
    const {state, actions} = useOperatorsService();

    useEffect(() => {
        actions.getOperators();
    }, [state.activeItem])

    return (

        <div>
            <h1 className="title">OPERATORI</h1>

            {state.pending && <Spinner/>}
            {state.error && <ServerError message={state.error}/>}

            <button
                className="btn primary"
                onClick={() => actions.setActiveItem({})}
            >NEW</button>

            <CMSOperatorForm
                activeItem={state.activeItem}
                onCLose={actions.resetActiveItem}
                onAdd= {actions.addOperator}
                onEdit={actions.editOperator}
            />

            <OperatorsList
                items={state.operators}
                activeItem={state.activeItem}
                onEditItem={actions.setActiveItem}
                onDeleteItem={actions.deleteOperator}
            />
        </div>

    )
}