import * as amount from '../actions/amount';


export const amountReducer = (state: number = 1, action: amount.AmountChangeAction) => {
  switch (action.type) {
    case amount.AMOUNT_CHANGE:
      return state = action.payload;
    default:
      return state;
  }
};
