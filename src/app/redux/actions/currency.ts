import { Action } from '@ngrx/store';
import { CurrencyInterface } from '../models/currency';

export const CURRENCIES_UPDATE = 'CURRENCIES_UPDATE';
export const CURRENCIES_UPDATED = 'CURRENCIES_UPDATED';

export class CurrensiesUpdateAction implements Action {
  readonly type = CURRENCIES_UPDATE;
}

export class CurrenciesUpdatedAction implements Action {
  readonly type = CURRENCIES_UPDATED;

  constructor(public payload: CurrencyInterface[] = null) {

  }
}
