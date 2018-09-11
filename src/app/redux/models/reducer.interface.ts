import { CurrencyInterface } from './currency';

export interface ReducerInterface {
  amount: number;
  currencies: CurrencyInterface[];
}
