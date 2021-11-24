import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'backbase-form-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent {
  @Output()
  public submitForm: EventEmitter<Event> = new EventEmitter();

  triggerSubmit(event: Event): void {
    this.submitForm.emit(event);
  }
}
