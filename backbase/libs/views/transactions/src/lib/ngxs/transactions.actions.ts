import { Transaction } from '@backbase/core/model';

export class Get {
  static readonly type = '[Transactions] Get';
}

export class Create {
  static readonly type = '[Transactions] Create';

  constructor(public payload: Transaction) {}
}
