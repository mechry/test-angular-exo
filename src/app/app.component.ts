import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exo3';

  name: string = '';
  status: string = '';
  salaire: number = 0;
  salaireNet: number = 0;

  employes = [
    {
      name: 'Mohamed Ben Ghachem',
      status: 'salarié',
      salaire: 50000,
    },
    {
      name: 'Alfred Hummels',
      status: 'autonome',
      salaire: 60000,
    },
  ];

  ajouter() {
    const ligne = {
      name: this.name,
      status: this.status,
      salaire: this.salaire,
    };
    this.employes.push(ligne);
  }

  calculer() {
    if (this.status == 'autonome') {
      this.salaireNet = this.salaire * 0.7;
    } else {
      this.salaireNet = this.salaire * 0.6;
    }
  }
}
