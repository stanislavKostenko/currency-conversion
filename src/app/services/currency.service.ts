import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyInterface } from '../redux/models/currency';
import { map } from 'rxjs/operators';

@Injectable()
export class CurrencyService {
  constructor(private http: HttpClient) {  }

  getRates(): Observable<CurrencyInterface[]> {
    return this.http.get<any>('http://data.fixer.io/api/latest?access_key=a139478e626e6170af59b511a06ed013')
      .pipe(map(result => {
        return Object.keys(result.rates).map((key) => {
          return { code: key, value: result.rates[key]};
        });
      }));

  }
}
