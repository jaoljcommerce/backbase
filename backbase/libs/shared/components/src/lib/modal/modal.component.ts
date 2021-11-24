import { Component, Input } from '@angular/core';

@Component({
  selector: 'backbase-shared-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input()
  public title!: string;
}
