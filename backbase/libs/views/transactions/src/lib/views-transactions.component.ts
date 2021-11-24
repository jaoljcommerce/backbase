import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Transaction } from '@backbase/core/model';

import * as TransactionsActions from './ngxs/transactions.actions';
import { TransactionsSelectors } from './ngxs/transactions.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'backbase-views-transactions',
  templateUrl: './views-transactions.component.html',
  styleUrls: ['./views-transactions.component.scss'],
})
export class ViewsTransactionsComponent implements OnInit {
  @Select(TransactionsSelectors.transactions)
  private transactions$!: Observable<Transaction[]>;
  private filterValue!: string;

  constructor(private store: Store) {}

  public ngOnInit() {
    this.store.dispatch(new TransactionsActions.Get());
  }

  public filterTransactions(event: Event) {
    const input = event.target as HTMLInputElement;

    this.filterValue = input.value;
  }

  public getTransactions() {
    return this.transactions$.pipe(
      map((transactions) => {
        if (this.filterValue) {
          return transactions.filter((transaction) => {
            return transaction.merchant.name.search(this.filterValue) > -1;
          });
        }

        return transactions;
      })
    );
  }
}
