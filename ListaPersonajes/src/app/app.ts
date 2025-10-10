import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { listapersonajes } from './listapersonajes/listapersonajes';
import { FichaPersonajeComponent } from './ficha-personaje/ficha-personaje';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, listapersonajes, FichaPersonajeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // <-- aquí el cambio importante
})
export class App {
  protected readonly title = signal('ListaPersonajes');
}