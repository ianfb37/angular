import { Routes } from '@angular/router';
import { JuegoTopo } from './juego-topo/juego-topo';
import { Carrera } from './carrera/carrera';
import { Animacion } from './animacion/animacion';
import { Formulario } from './formulario/formulario';
import { CdkDragDropConnectedSortingExample  } from './kanban/kanban';
import { Sesion } from './sesion/sesion';
import { Contador } from './contador/contador/contador';
export const routes: Routes = [
      { path: 'juego-topo', component: JuegoTopo },{ path: 'carrera', component: Carrera },{ path: 'animacion', component: Animacion },{path:'formulario', component:Formulario},
      {path:'kanban', component:CdkDragDropConnectedSortingExample},{path:'sesion', component:Sesion},{path:'contador', component:Contador}
];
