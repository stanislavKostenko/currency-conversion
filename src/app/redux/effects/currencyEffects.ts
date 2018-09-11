import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { CurrencyService } from '../../services/currency.service';
import * as currency from '../actions/currency';
import { map, switchMap } from 'rxjs/operators';
import { CurrenciesUpdatedAction } from '../actions/currency';

@Injectable()
export class CurrencyEffects {
  @Effect()
  update$: Observable<Action> = this.actions$
    .pipe(ofType(currency.CURRENCIES_UPDATE), switchMap(() => {
        return this.currencyService.getRates()
          .pipe(map((data) => new CurrenciesUpdatedAction(data)));
    }));


  constructor(private currencyService: CurrencyService, private actions$: Actions) {}
}
