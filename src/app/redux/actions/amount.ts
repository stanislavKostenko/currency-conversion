import { Action } from '@ngrx/store';

export const AMOUNT_CHANGE = 'AMOUNT_CHANGE';

export class AmountChangeAction implements Action {
  readonly type = AMOUNT_CHANGE;

  constructor(public payload: number) {}
}
