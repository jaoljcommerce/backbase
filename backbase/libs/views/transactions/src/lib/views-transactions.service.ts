import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { CREDIT_DEBIT_INDICATOR } from './enums/credit-debit-indicator.enum';
import { CURRENCY_CODE } from './enums/currency-code.enum';
import { TRANSACTION_TYPE } from './enums/transaction-type.enum';

import * as TransactionsActions from './ngxs/transactions.actions';

@Injectable({
  providedIn: 'root',
})
export class ViewsTransactionsService {
  constructor(private store: Store) {}

  public create(toAccount: string, amount: number) {
    this.store.dispatch(
      new TransactionsActions.Create({
        categoryCode: '#c12020',
        dates: {
          valueDate: new Date().getTime(),
        },
        transaction: {
          amountCurrency: {
            amount: amount,
            currencyCode: CURRENCY_CODE.EUR,
          },
          type: TRANSACTION_TYPE.ONLINE_TRANSFER,
          creditDebitIndicator: CREDIT_DEBIT_INDICATOR.DBIT,
        },
        merchant: {
          name: toAccount,
          accountNumber: 'SI64397745065188826',
        },
      })
    );
  }
}
