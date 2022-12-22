import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
})
export class EmployeComponent {
  @Input() name: String = '';
  @Input() status: String = '';
  @Input() salaire: number = 0;

  constructor() {}

  getColor() {
    if (this.status == 'salarié') {
      return 'green';
    } else {
      return 'blue';
    }
  }
}
