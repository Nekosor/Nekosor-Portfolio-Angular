import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  loading: boolean = true;

  constructor() {
    // función simula la carga de tu portafolio
    this.loadPortfolio();
  }

  loadPortfolio() {
    setTimeout(() => {
      this.loading = false;
    }, 2000); // Puedes ajustar este tiempo
  }

}
