import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  nums = [
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
  currValue = '';
  writetoinput(value: any) {
    this.currValue = this.currValue + value;
    const toshow = this.currValue;
  }
  constructor() {}

  ngOnInit(): void {}
}
