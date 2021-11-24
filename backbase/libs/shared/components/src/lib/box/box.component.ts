import { Component, Input } from '@angular/core';

@Component({
  selector: 'backbase-shared-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @Input()
  public title!: string;

  @Input()
  public icon!: string;

  @Input()
  public contentRadius!: boolean;
}
