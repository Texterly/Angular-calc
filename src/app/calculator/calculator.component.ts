import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  buttonPress(value: string): void {
    this.buttonClicked.emit(value);
  }

  readonly nums: string[] = [
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1',
    '0',
    '+',
    '-',
    '*',
    '/',
    '=',
    'c',
  ];

  constructor() {}

  ngOnInit(): void {}
}

// chatGpt types
// ||||
