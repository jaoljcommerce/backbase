import { TransferStateModel } from '@backbase/core/model';

export class Create {
  static readonly type = '[Transfer] Create';

  constructor(public payload: TransferStateModel) {}
}
