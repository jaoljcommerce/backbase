import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ViewsTransferModule } from '@backbase/views/transfer';
import { ViewsTransactionsModule } from '@backbase/views/transactions';

import { FeaturesDashboardComponent } from './features-dashboard.component';
import { FeaturesDashboardRouting } from './features-dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FeaturesDashboardRouting),
    ViewsTransferModule,
    ViewsTransactionsModule,
  ],
  declarations: [FeaturesDashboardComponent],
})
export class FeaturesDashboardModule {}
