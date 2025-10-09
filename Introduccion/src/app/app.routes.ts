import { Routes } from '@angular/router';
import { JuegoTopo } from './juego-topo/juego-topo';
import { Carrera } from './carrera/carrera';
import { Animacion } from './animacion/animacion';

export const routes: Routes = [
      { path: 'juego-topo', component: JuegoTopo },{ path: 'carrera', component: Carrera },{ path: 'animacion', component: Animacion }
];
