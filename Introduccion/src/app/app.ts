// app.ts
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { CommonModule } from '@angular/common';
import { JuegoTopo } from "./juego-topo/juego-topo";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { Carrera } from "./carrera/carrera";
import { Animacion } from './animacion/animacion';
import { Formulario } from './formulario/formulario';
import { CdkDragDropConnectedSortingExample  } from './kanban/kanban';
import { Sesion } from './sesion/sesion';
import { NavbarComponent } from "./navbar/navbar";
import { ClickerComponent } from './clicker/clicker';
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Contador, JuegoTopo, Carrera, Animacion, Formulario, CdkDragDropConnectedSortingExample, Sesion, NavbarComponent, ClickerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  isHalloweenMode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.loadInitialTheme();
    this.themeService.halloweenMode$.subscribe(mode => {
      this.isHalloweenMode = mode;
    });
  }
}

