import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@ngneat/transloco';

import { InputComponent } from './input/input.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

const COMPONENTS = [InputComponent, SubmitButtonComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    TranslocoModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class SharedFormModule {}
