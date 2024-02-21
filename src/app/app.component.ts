import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-app';
  mode: boolean = true;
  currValue: string = '0';

  onButtonClicked(value: string) {
    this.writeToInput(value);
  }

  writeToInput(value: string) {
    this.currValue = this.currValue + value;
  }
}

// eval
// Subject
