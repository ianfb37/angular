import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-juego-topo',
   imports: [CommonModule],
  templateUrl: './juego-topo.html',
  styleUrl: './juego-topo.css'
})
export class JuegoTopo {
 Math = Math;
  items = Array(9).fill(0);

  // Índice del círculo "activo"
  activeIndex = Math.floor(Math.random() * 9);
contador: number = 0;

  onCircleClick(index: number) {
    if (index === this.activeIndex) {
      this.contador++;
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * 9);
        
      } while (newIndex === this.activeIndex);
      this.activeIndex = newIndex;
    }
  }
}
