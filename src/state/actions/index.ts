import { ActionTypes } from "../action-types";

interface depositAction{
    type:ActionTypes.DEPOSIT;
    payload:number
}

interface withdrawalAction{
    type: ActionTypes.WITHDRAWAL;
    payload:number
}

interface bankruptAction{
    type: ActionTypes.BANKRUPT;
}

export type Action = depositAction | withdrawalAction | bankruptAction; 