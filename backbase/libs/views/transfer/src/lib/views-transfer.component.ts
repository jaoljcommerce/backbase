import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { Store } from '@ngxs/store';
import { MatDialog } from '@angular/material/dialog';

import { ViewsTransactionsService } from '@backbase/views/transactions';

import * as TransferActions from './ngxs/transfer.actions';
import { TransferModalComponent } from './modal/transfer-modal.component';
import { ValidatorMessage } from './model/validator-message.model';
import { ValidatorError } from './model/validator-error.model';

@Component({
  selector: 'backbase-views-transfer',
  templateUrl: './views-transfer.component.html',
  styleUrls: ['./views-transfer.component.scss'],
})
export class ViewsTransferComponent implements OnInit {
  public transferForm: FormGroup;
  public balanceValue: number;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private translocoService: TranslocoService,
    private dialog: MatDialog,
    private transactionsService: ViewsTransactionsService
  ) {
    this.balanceValue = 5824.76;
    this.transferForm = this.fb.group({
      fromAccount: this.fb.control(
        {
          value: '',
          disabled: true,
        },
        [Validators.required]
      ),
      toAccount: this.fb.control('', [Validators.required]),
      amount: this.fb.control('', [
        Validators.required,
        Validators.min(this.balanceValue - 500),
        Validators.max(this.balanceValue),
      ]),
    });
  }

  ngOnInit(): void {
    this.translocoService
      .selectTranslate('form.from_account.placeholder')
      .subscribe((value) => {
        this.transferForm.patchValue({
          fromAccount: value + this.balanceValue,
        });
      });
  }

  public onSubmit(): void {
    if (!this.transferForm.valid) {
      return;
    }

    this.store
      .dispatch(new TransferActions.Create(this.transferForm.value))
      .subscribe(() => {
        this.openDialog();
      });
  }

  public submitForm() {
    this.transferForm.get('toAccount')?.markAsTouched();
    this.transferForm.get('amount')?.markAsTouched();
  }

  public getInputErrors(fildName: string, messages: ValidatorMessage[]) {
    const errors: ValidatorError[] = [];

    messages.forEach((validator) => {
      errors.push({
        condition:
          this.transferForm.get(fildName)!.hasError(validator.key) &&
          this.transferForm.get(fildName)!.touched,
        message: validator.message,
      });
    });

    return errors;
  }

  private openDialog() {
    const dialogRef = this.dialog.open(TransferModalComponent);

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        const toAccount = this.transferForm.get('toAccount');
        const amount = this.transferForm.get('amount');

        this.transactionsService.create(toAccount?.value, amount?.value);

        toAccount?.reset();
        amount?.reset();
      }
    });
  }
}
