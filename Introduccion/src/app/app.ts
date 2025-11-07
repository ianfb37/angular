// app.ts
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { CommonModule } from '@angular/common';
import { JuegoTopo } from "./juego-topo/juego-topo";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from './theme.service';
import { Carrera } from "./carrera/carrera";
import { Animacion } from './animacion/animacion';
import { Formulario } from './formulario/formulario';
import { CdkDragDropConnectedSortingExample  } from './kanban/kanban';
import { Sesion } from './sesion/sesion';
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Contador, JuegoTopo, Carrera, Animacion, Formulario, CdkDragDropConnectedSortingExample,Sesion ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  currentTheme: Theme = 'normal';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.loadInitialTheme();
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
}