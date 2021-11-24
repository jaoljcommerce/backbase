import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'backbase-shared-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output()
  public inputChange: EventEmitter<Event> = new EventEmitter();

  onInputChange(event: Event): void {
    this.inputChange.emit(event);
  }
}
