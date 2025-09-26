import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { CommonModule } from '@angular/common';
import { JuegoTopo } from "./juego-topo/juego-topo";

@Component({
  selector: 'app-root',
   imports: [CommonModule, RouterOutlet, Contador, JuegoTopo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');
}

