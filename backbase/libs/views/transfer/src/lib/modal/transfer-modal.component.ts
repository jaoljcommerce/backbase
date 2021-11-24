import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { TransferSelectors } from '../ngxs/transfer.selectors';

@Component({
  selector: 'backbase-transfer-modal',
  templateUrl: './transfer-modal.component.html',
  styleUrls: ['./transfer-modal.component.scss'],
})
export class TransferModalComponent {
  @Select(TransferSelectors.amount)
  public amount$!: Observable<number>;

  @Select(TransferSelectors.toAccount)
  public toAccount$!: Observable<string>;
}
