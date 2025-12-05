import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';


interface MejoraProd {
  nombre: string;
  baseCoste: number;
  baseProduccion: number;
  incrementoCoste: number;
  cantidad: number;
}

interface MejoraClick {
  nombre: string;
  baseCoste: number;
  incrementoClick: number;
  incrementoCoste: number;
  cantidad: number;
}

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.html',
  styleUrls: ['./clicker.css'],
   imports: [
    CommonModule,
    NgClass
  ]
})
export class ClickerComponent implements OnInit {
  monedas = 0;
  monedasTotales = 0;
  incrementoPorClick = 1;
  monedasPorSegundo = 0;

  mejorasProd: MejoraProd[] = [
    { nombre: 'Abuela', baseCoste: 50, baseProduccion: 1, incrementoCoste: 1.15, cantidad: 0 },
    { nombre: 'Granja', baseCoste: 600, baseProduccion: 10, incrementoCoste: 1.15, cantidad: 0 },
    { nombre: 'Fábrica', baseCoste: 5000, baseProduccion: 80, incrementoCoste: 1.15, cantidad: 0 },
    { nombre: 'Banco', baseCoste: 40000, baseProduccion: 400, incrementoCoste: 1.15, cantidad: 0 },
    { nombre: 'Templo', baseCoste: 200000, baseProduccion: 1500, incrementoCoste: 1.15, cantidad: 0 },
    { nombre: 'Torre', baseCoste: 1700000, baseProduccion: 7500, incrementoCoste: 1.15, cantidad: 0 },
  ];
  mejorasClick: MejoraClick[] = [
    { nombre: 'Raton Dorado', baseCoste: 100, incrementoClick: 1, incrementoCoste: 1.2, cantidad: 0 },
    { nombre: 'Clicker Automático', baseCoste: 1000, incrementoClick: 5, incrementoCoste: 1.2, cantidad: 0 },
  ];

  mejoraTemporalActive = false;
  mejoraTemporalTime = 0;
  temporalBonus = 2;

  temporalVisible = false;
  temporalTop = 90;
  temporalLeft = 90;

  ngOnInit(): void {
    setInterval(() => this.tick(), 1000);
    setTimeout(() => this.spawnTemporal(), 15000 + Math.random() * 15000);
  }

  formatNumber(n: number): string {
    if (n < 1000) return n.toLocaleString('es-ES');
    if (n < 2000000) return n.toLocaleString('es-ES');
    if (n < 1000000000) {
      const m = n / 1000000;
      return m < 10 ? `${m.toLocaleString('es-ES', { maximumFractionDigits: 3 })} millones` : `${m.toLocaleString('es-ES', { maximumFractionDigits: 0 })} millones`;
    }
    if (n < 1000000000000) {
      const b = n / 1000000000;
      return b < 10 ? `${b.toLocaleString('es-ES', { maximumFractionDigits: 3 })} billones` : `${b.toLocaleString('es-ES', { maximumFractionDigits: 0 })} billones`;
    }
    const t = n / 1000000000000;
    return t < 10 ? `${t.toLocaleString('es-ES', { maximumFractionDigits: 3 })} trillones` : `${t.toLocaleString('es-ES', { maximumFractionDigits: 0 })} trillones`;
  }

  getPrecioProd(index: number): number {
    const m = this.mejorasProd[index];
    return Math.floor(m.baseCoste * Math.pow(m.incrementoCoste, m.cantidad));
  }

  getPrecioClick(index: number): number {
    const m = this.mejorasClick[index];
    return Math.floor(m.baseCoste * Math.pow(m.incrementoCoste, m.cantidad));
  }

  getMonedasPerSecond(): number {
    let prod = this.mejorasProd.reduce((acc, m) => acc + m.cantidad * m.baseProduccion, 0);
    if (this.mejoraTemporalActive) prod *= this.temporalBonus;
    return prod;
  }

  coinClick() {
    let clickGain = this.incrementoPorClick +
      this.mejorasClick.reduce((acc, m) => acc + m.cantidad * m.incrementoClick, 0);
    if (this.mejoraTemporalActive) clickGain *= this.temporalBonus;
    this.monedas += clickGain;
    this.monedasTotales += clickGain;
  }

  buyProd(i: number) {
    const coste = this.getPrecioProd(i);
    if (this.monedas >= coste) {
      this.monedas -= coste;
      this.mejorasProd[i].cantidad++;
    }
  }

  buyClick(i: number) {
    const coste = this.getPrecioClick(i);
    if (this.monedas >= coste) {
      this.monedas -= coste;
      this.mejorasClick[i].cantidad++;
    }
  }

  tick() {
    let prod = this.getMonedasPerSecond();
    this.monedas += prod;
    this.monedasTotales += prod;
    this.monedasPorSegundo = prod;
    // Temporal mejora handler
    if (this.mejoraTemporalActive && Date.now() > this.mejoraTemporalTime) {
      this.mejoraTemporalActive = false;
    }
  }

  reiniciar() {
    this.monedas = 0;
    this.monedasTotales = 0;
    this.mejorasProd.forEach(m => m.cantidad = 0);
    this.mejorasClick.forEach(m => m.cantidad = 0);
    this.mejoraTemporalActive = false;
  }

  spawnTemporal() {
    this.temporalTop = 90 + Math.random() * 300;
    this.temporalLeft = 90 + Math.random() * 300;
    this.temporalVisible = true;
    setTimeout(() => this.spawnTemporal(), 15000 + Math.random() * 15000);
  }

  activateTemporal() {
    this.mejoraTemporalActive = true;
    this.mejoraTemporalTime = Date.now() + 10000; // 10s boost
    this.temporalVisible = false;
  }
}