# 📄 Modificación de app.component.html
Abrir el archivo src/app/app.component.html, borrar absolutamente todo su contenido y escribir estas dos líneas:


#  Código a escribir en app.html
<app-navbar></app-navbar>
<app-content></app-content>



# Código a escribir en app.ts
import { Component } from '@angular/core';
// 1. Importamos los componentes que acabamos de crear
import { Navbar } from './components/navbar/navbar';
import { Content } from './components/content/content';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [Navbar, Content], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'mi-proyecto-angular';
}



### Ejecuta proyecto Angular
ng serve --open


