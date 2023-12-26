import {useReducer} from "react";
import {initialState, operatorsReducer} from "@/services/operators/operatos.reducer";
import * as OperatorsApi from "@/services/operators/operatos.api";
import {User} from "@/model/user";


export function useOperatorsService() {
    const [state, dispatch] = useReducer(operatorsReducer, initialState);

    async function getOperators() {
        dispatch({type: 'pending', payload: true});

        try {
            const res = await OperatorsApi.getAllUsers();
            dispatch({type: 'operatorsGetSuccess', payload: res.data})
        } catch (e) {
            dispatch({type: 'error', payload: 'Operators not loaded'})
        }
    }

    async function deleteOperator(id: number) {
        dispatch({type: 'pending', payload: true});

        try {
            await OperatorsApi.remove(id);
            dispatch({type: 'operatorDeleteSuccess', payload: id})
        } catch (e) {
            dispatch({type: 'error', payload: 'Operator not deleted'})
        }
    }

    async function addOperator(operator: Partial<User>) {
        dispatch({type: 'pending', payload: true})
        try {
            const res = await OperatorsApi.add(operator);
            dispatch({type: 'operatorAddSuccess', payload: res.data})
        } catch (e) {
            dispatch({type: 'error', payload: 'Operator not added'})
        }
    }

    async function editOperator(operator: Partial<User>) {
        dispatch({type: 'pending', payload: true})

        try {
            const res = await OperatorsApi.edit(operator);
            dispatch({type: 'operatorEditSuccess', payload: res.data})

        } catch (e) {
            dispatch({type: 'error', payload: 'Operators not edited'})
        }
    }

    function setActiveItem(operator: User | {}) {
        dispatch({type: 'operatorSetActive', payload: operator})
    }

    function resetActiveItem() {
        dispatch({type: 'operatorSetActive', payload: null})
    }

    return {
        actions: {
            getOperators,
            deleteOperator,
            addOperator,
            editOperator,
            setActiveItem,
            resetActiveItem
        },
        state
    }

}


