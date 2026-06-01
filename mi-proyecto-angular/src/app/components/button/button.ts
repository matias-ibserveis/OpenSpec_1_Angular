// src/app/components/button/button.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html'
})
export class Button {
  onClick() {
    // Aquí puedes agregar la lógica que deseas ejecutar cuando se haga clic en el botón
    console.log('Botón clicado!');
  }
}