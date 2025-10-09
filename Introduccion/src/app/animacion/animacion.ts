import { Component } from '@angular/core';

@Component({
  selector: 'app-animacion',
  imports: [],
  templateUrl: './animacion.html',
  styleUrl: './animacion.css'
})
export class Animacion {
toggleNightMode() {
  const fullpage = document.getElementById("fullpage");
  const switchBtn = document.getElementById("switch");
  if (fullpage && switchBtn) {
    if (fullpage.classList.contains("night")) {
      fullpage.classList.remove("night");
      switchBtn.classList.remove("switched");
    } else {
      fullpage.classList.add("night");
      switchBtn.classList.add("switched");
    }
  }
}
}
