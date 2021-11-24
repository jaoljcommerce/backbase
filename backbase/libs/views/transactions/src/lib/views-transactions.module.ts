import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxsModule } from '@ngxs/store';

import { SharedComponentsModule } from '@backbase/shared/components';

import { ViewsTransactionsComponent } from './views-transactions.component';
import { TransactionsState } from './ngxs/transactions.state';
import { FormatAmountPipe } from './pipe/format-amount.pipe';

const COMPONENTS = [ViewsTransactionsComponent, FormatAmountPipe];

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    TranslocoModule,
    NgxsModule.forFeature([TransactionsState]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ViewsTransactionsModule {}
