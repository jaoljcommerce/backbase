import { Selector } from '@ngxs/store';

import { TransferStateModel } from '@backbase/core/model';

import { TransferState } from './transfer.state';

export class TransferSelectors {
  @Selector([TransferState])
  static fromAccount(state: TransferStateModel) {
    return state.fromAccount;
  }

  @Selector([TransferState])
  static toAccount(state: TransferStateModel) {
    return state.toAccount;
  }

  @Selector([TransferState])
  static amount(state: TransferStateModel) {
    return state.amount;
  }
}
