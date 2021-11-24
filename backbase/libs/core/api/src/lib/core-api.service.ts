import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck, shareReplay } from 'rxjs/operators';

import { Transaction } from '@backbase/core/model';

@Injectable({
  providedIn: 'root',
})
export class CoreApiService {
  private readonly baseUrl = './assets/data/transactions.json';

  constructor(private http: HttpClient) {}

  public getTransactions() {
    return this.http
      .get<{
        data: Transaction[];
      }>(this.baseUrl)
      .pipe(
        pluck('data'),
        map((transactions) => {
          transactions.map((transaction) => {
            if (typeof transaction.dates.valueDate === 'string') {
              transaction.dates.valueDate = new Date(
                transaction.dates.valueDate
              ).getTime();
            }

            if (
              typeof transaction.transaction.amountCurrency.amount === 'string'
            ) {
              transaction.transaction.amountCurrency.amount = parseFloat(
                transaction.transaction.amountCurrency.amount
              );
            }
          });

          transactions.sort((a, b) => {
            return a.dates.valueDate > b.dates.valueDate ? -1 : 1;
          });

          return transactions;
        }),
        shareReplay()
      );
  }
}
