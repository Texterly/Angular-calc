import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-app';
  mode: boolean = true;
  currValue: string = '';

  onButtonClicked(value: string) {
    this.writeToInput(value);
  }

  writeToInput(value: string) {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '-':
      case '+':
      case '*':
      case '/':
        this.currValue = this.currValue + value;
        break;
      case '=':
        this.currValue = eval(this.currValue);
        break;
      case 'c':
        this.currValue = '';
        break;
    }
  }
}

// eval
// Subject
