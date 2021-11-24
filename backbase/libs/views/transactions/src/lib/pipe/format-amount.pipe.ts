import { Pipe, PipeTransform } from '@angular/core';

import { CREDIT_DEBIT_INDICATOR } from '../enums/credit-debit-indicator.enum';

@Pipe({ name: 'formatAmount' })
export class FormatAmountPipe implements PipeTransform {
  private className!: string;
  private negativeNumberSign!: string;
  private currencySymbol!: string;

  transform(value: string | null, indicator: string) {
    this.currencySymbol = `<span class="currency">${value && value.charAt(0)}</span>`;

    if (indicator === CREDIT_DEBIT_INDICATOR.CRDT) {
      this.className = 'green';
      this.negativeNumberSign = '';
    } else {
      this.className = 'red';
      this.negativeNumberSign = '<span class="negative">-</span>';
    }

    return `<p class="${this.className}">${this.currencySymbol}${
      this.negativeNumberSign
    }${value?.substring(1)}</p>`;
  }
}
