import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ficha {
  imagen: string;
  nombre: string;
  raza: string;
  poder: number;
}
@Component({
  selector: 'app-listapersonajes',
  imports: [],
  templateUrl: './listapersonajes.html',
  styleUrl: './listapersonajes.css'
})



export class listapersonajes {
  personajes: ficha[] = [
    { imagen: 'https://i.pinimg.com/564x/1c/7e/0f/1c7e0f3a3a5e4f0f4e2b8e4f4e2b8e4f.jpg', nombre: 'Goku', raza: 'Saiyan', poder: 9000 },
    { imagen: 'https://i.pinimg.com/564x/3a/2b/4c/3a2b4c5d6e7f8g9h0i1j2k3l4m5n6o7p.jpg', nombre: 'Vegeta', raza: 'Saiyan', poder: 8500 },
    { imagen: 'https://i.pinimg.com/564x/4d/5e/6f/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s.jpg', nombre: 'Piccolo', raza: 'Namekiano', poder: 7000 },
    { imagen: 'https://i.pinimg.com/564x/5e/6f/7g/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s.jpg', nombre: 'Gohan', raza: 'Saiyan', poder: 8000 },
    { imagen: 'https://i.pinimg.com/564x/6f/7g/8h/6f7g8h9i0j1k2l3m4n5o6p7q8r9s.jpg', nombre: 'Trunks', raza: 'Saiyan', poder: 7500 }
  ];
}
