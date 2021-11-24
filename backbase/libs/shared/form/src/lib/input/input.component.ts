import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'backbase-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent {
  @Input()
  public label!: string;

  @Input()
  public type!: string;

  @Input()
  public placeholder!: string;

  @Input()
  public name!: string;

  @Input()
  public form!: FormGroup;

  @Input()
  public errors?: {
    condition: boolean | undefined;
    message: string;
  }[];
}
