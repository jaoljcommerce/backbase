import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { TransferStateModel } from '@backbase/core/model';

import * as TransferActions from './transfer.actions';

@State<TransferStateModel>({
  name: 'transfer',
  defaults: {
    fromAccount: '',
    toAccount: '',
    amount: 0,
  },
})
@Injectable()
export class TransferState {
  @Action(TransferActions.Create)
  public createTransfer(
    ctx: StateContext<TransferStateModel>,
    { payload }: TransferActions.Create
  ) {
    ctx.patchState({
      fromAccount: payload.fromAccount,
      toAccount: payload.toAccount,
      amount: payload.amount,
    });
  }
}
