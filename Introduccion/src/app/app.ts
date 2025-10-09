import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { CommonModule } from '@angular/common';
import { JuegoTopo } from "./juego-topo/juego-topo";
import { Router } from '@angular/router';
import {ToolbarOverviewExample} from './navbar/navbar';
import { Carrera } from "./carrera/carrera";
import { Animacion } from './animacion/animacion';
@Component({
  selector: 'app-root',
   imports: [CommonModule, RouterOutlet, Contador, JuegoTopo, ToolbarOverviewExample , Carrera,Animacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');
  constructor(private router: Router) {}
  topo(){
   
    this.router.navigate(['/juego-topo']);
  }
}


