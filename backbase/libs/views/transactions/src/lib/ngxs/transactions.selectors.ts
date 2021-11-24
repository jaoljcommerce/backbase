import { Selector } from '@ngxs/store';

import { TransactionsStateModel } from '@backbase/core/model';

import { TransactionsState } from './transactions.state';

export class TransactionsSelectors {
  @Selector([TransactionsState])
  static transactions(state: TransactionsStateModel) {
    return state.transactions;
  }

  @Selector([TransactionsState])
  static error(state: TransactionsStateModel) {
    return state.error;
  }
}
