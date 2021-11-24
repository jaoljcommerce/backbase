import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxsModule } from '@ngxs/store';

import { SharedComponentsModule } from '@backbase/shared/components';
import { SharedFormModule } from '@backbase/shared/form';

import { ViewsTransferComponent } from './views-transfer.component';
import { TransferModalComponent } from './modal/transfer-modal.component';
import { TransferState } from './ngxs/transfer.state';

const COMPONENTS = [ViewsTransferComponent, TransferModalComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedFormModule,
    TranslocoModule,
    NgxsModule.forFeature([TransferState]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ViewsTransferModule {}
