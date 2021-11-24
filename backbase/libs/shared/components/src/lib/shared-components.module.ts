import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { LogoComponent } from './logo/logo.component';
import { BoxComponent } from './box/box.component';
import { FilterComponent } from './filter/filter.component';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { ModalComponent } from './modal/modal.component';

const COMPONENTS = [
  LogoComponent,
  BoxComponent,
  FilterComponent,
  TransactionItemComponent,
  ModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    TranslocoModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedComponentsModule {}
