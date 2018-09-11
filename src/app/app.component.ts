import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ReducerInterface } from './redux/models/reducer.interface';
import { AmountChangeAction } from './redux/actions/amount';
import { Observable } from 'rxjs';
import { getAmountState, getCurrencyState } from './redux/redusers';
import { CurrensiesUpdateAction } from './redux/actions/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  amount$: Observable<number>;
  currencies: any[];

  constructor(private store: Store<ReducerInterface>) {
    this.amount$ = this.store.pipe(select(getAmountState));
    this.store.pipe(select(getCurrencyState)).subscribe(data => {
      this.currencies = data;
    });
  }

  ngOnInit() {
    this.store.dispatch(new CurrensiesUpdateAction());
  }

  onAmountChange(amount: string) {
    const number = parseFloat(amount);
    if (!isNaN(number)) {
      this.store.dispatch(new AmountChangeAction(number));
    }
  }
}
