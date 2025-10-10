import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Personaje {
  nombre: string;
  raza: string;
  poder: number;
  imagen: string;
}

@Component({
  selector: 'app-ficha-personaje',
  templateUrl: './ficha-personaje.html',
  styleUrls: ['./ficha-personaje.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FichaPersonajeComponent {
  @Input() personaje!: Personaje;

  get estrellas(): any[] {
    return Array(this.personaje?.poder ? Math.round(this.personaje.poder / 2000) : 0);
  }

  get estrellasGrises(): any[] {
    return Array(5 - this.estrellas.length);
  }

  get fondo(): string {
    switch (this.personaje?.raza) {
      case 'Saiyan': return '#ffe082';
      case 'Namekiano': return '#c8e6c9';
      default: return '#e0e0e0';
    }
  }
}