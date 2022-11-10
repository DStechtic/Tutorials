import { ActionTypes } from "../action-types";
import { Action } from "../actions";

const initialState = {
  amount: 0,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return { ...state, amount: state.amount + action.payload };
    case ActionTypes.WITHDRAWAL:
      return { ...state, amount: state.amount - action.payload };
    case ActionTypes.BANKRUPT:
          return { ...state, amount: 0 };
    default:
      return { ...state };
  }
};

export default reducer;
