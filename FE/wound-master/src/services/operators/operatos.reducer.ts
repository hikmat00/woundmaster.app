import {User} from "@/model/user";
import {OperatorsActions} from "@/services/operators/operators.actions";

export interface OperatorsState {
    operators: User[];
    activeItem: Partial<User> | null;
    pending: boolean;
    error: string | null;
}

export const initialState: OperatorsState = {
    operators: [],
    activeItem: null,
    pending: false,
    error: null
};

export function operatorsReducer(state: OperatorsState, action: OperatorsActions) {
    const{type, payload} = action;

    switch (type) {
        case 'operatorsGetSuccess':
            return {...state, pending: false, error: null, operators: payload}
        case 'operatorDeleteSuccess':
            return {
                ...state,
                operators: state.operators.filter(item =>item.id !== payload),
                error: null,
                pending:false,
                activeItem: null,
            };
        case 'operatorAddSuccess':
            return {
                ...state,
                operators: [...state.operators, payload],
                activeItem: null,
                error: null,
                pending: false,
            };
        case 'operatorEditSuccess':
            return {
                ...state,
                operators: state.operators.map(item => item.id === payload.id ? payload: item),
                error: null,
                pending: false,
            };
        case 'operatorSetActive':
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

