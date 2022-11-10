import { Dispatch } from "redux"
import { ActionTypes } from "../action-types"
import { Action } from "../actions"

export const depositMoney = (amount:number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.DEPOSIT,
            payload:amount
        })
    }
}

export const withdrawMoney = (amount:number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.WITHDRAWAL,
            payload:amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.BANKRUPT,
        })
    }
}