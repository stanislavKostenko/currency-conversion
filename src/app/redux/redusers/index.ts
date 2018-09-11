import { amountReducer } from './amount';
import { currencyReducer } from './currency';
import { ReducerInterface } from '../models/reducer.interface';

export const getAmountState = (state: ReducerInterface) => state.amount;
export const getCurrencyState = (state: ReducerInterface) => state.currencies;

export const reducers = {
  amount: amountReducer,
  currencies: currencyReducer,
};
