import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
@Component({

  selector: 'app-ficha-personaje',
  templateUrl: './ficha-personaje.html',
  styleUrls: ['./ficha-personaje.css'],
  standalone: true,
  imports: [CommonModule, NgStyle]
})

export class FichaPersonajeComponent {
  get estrellasGrises(): any[] {
    return Array(5 - this.estrellas.length);
  }

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