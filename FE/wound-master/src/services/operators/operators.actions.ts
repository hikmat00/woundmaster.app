import {User} from "@/model/user";

export type OperatorsGetSuccess = { type: 'operatorsGetSuccess', payload: User[]};
export type OperatorDeleteSuccess = { type: 'operatorDeleteSuccess', payload: number};
export type OperatorAddSuccess = { type: 'operatorAddSuccess', payload: User};
export type OperatorEditSuccess = { type: 'operatorEditSuccess', payload: User};

export type OperatorSetActive = { type: 'operatorSetActive', payload: Partial<User> | null};

export type Error = { type: 'error', payload: string};
export type Pending = { type: 'pending', payload: boolean};

export type OperatorsActions =
    OperatorsGetSuccess |
    OperatorDeleteSuccess |
    OperatorAddSuccess |
    OperatorEditSuccess |
    OperatorSetActive |
    Error |
    Pending;