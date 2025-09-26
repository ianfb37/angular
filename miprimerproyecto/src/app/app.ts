import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Semaforo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miprimerproyecto');
}
function temporizador(): void {
let temporizador = setTimeout(() => {
  console.log('pasaron 5 segundos');
  clearTimeout(temporizador);
}, 5000);

let intervalo = setInterval(() => {
  console.log('pasaron 3 segundos');
}, 3000);
setTimeout(() => {
  clearInterval(intervalo);
}, 16000);}

temporizador();
