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
