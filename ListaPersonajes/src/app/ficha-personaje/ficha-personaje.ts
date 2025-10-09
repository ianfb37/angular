import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ficha-personaje',
  templateUrl: './ficha-personaje.html',
  styleUrls: ['./ficha-personaje.css'],
  standalone: true
})
export class FichaPersonajeComponent {
  @Input() personaje!: {
    nombre: string;
    raza: string;
    poder: number;
    imagen: string;
  };

  // Devuelve un array para mostrar estrellas
  get estrellas(): any[] {
    return Array(this.personaje?.poder ? Math.round(this.personaje.poder / 2000) : 0);
  }

  // Color de fondo según raza
  get fondo(): string {
    switch (this.personaje?.raza) {
      case 'Saiyan': return '#ffe082';
      case 'Namekiano': return '#c8e6c9';
      default: return '#e0e0e0';
    }
  }
}