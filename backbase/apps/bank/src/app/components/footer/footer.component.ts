import { Component } from '@angular/core';

@Component({
  selector: 'backbase-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }
}
