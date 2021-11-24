import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { TransactionsStateModel } from '@backbase/core/model';
import { CoreApiService } from '@backbase/core/api';

import * as TransactionsActions from './transactions.actions';

@State<TransactionsStateModel>({
  name: 'transactions',
  defaults: {
    transactions: [],
    error: '',
  },
})
@Injectable()
export class TransactionsState {
  constructor(private api: CoreApiService) {}

  @Action(TransactionsActions.Get)
  public getTransactions(ctx: StateContext<TransactionsStateModel>) {
    ctx.patchState({
      transactions: [],
      error: '',
    });

    return this.api.getTransactions().pipe(
      tap((transactions) => {
        ctx.patchState({
          transactions: transactions,
        });
      }),
      catchError((error: HttpErrorResponse) => {
        ctx.patchState({
          error: error.message,
        });

        return throwError(error);
      })
    );
  }

  @Action(TransactionsActions.Create)
  public createTransaction(
    ctx: StateContext<TransactionsStateModel>,
    { payload }: TransactionsActions.Create
  ) {
    const state = ctx.getState();
    const transactions = [...state.transactions];

    transactions.unshift(payload);

    ctx.patchState({
      transactions: transactions,
    });
  }
}
