import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListapersonajesComponent } from './listapersonajes/listapersonajes';
import { FichaPersonajeComponent } from "./ficha-personaje/ficha-personaje";
import { FormularioRegistro } from './formulario-registro/formulario-registro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListapersonajesComponent, FichaPersonajeComponent, FormularioRegistro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('Lista de Personajes de Dragon Ball');
}