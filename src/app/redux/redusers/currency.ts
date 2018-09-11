import * as currency from '../actions/currency';

export const currencyReducer = (state = [], action: currency.CurrenciesUpdatedAction) => {
  switch (action.type) {
    case currency.CURRENCIES_UPDATED:
      return [...state, action.payload];
    default:
      return state;
  }
};
