// sesion.ts
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.html',
  imports: [FormsModule, CommonModule] // ← Importa los módulos necesarios
})
export class Sesion {
  
  usuario = {
    email: '',
    password: ''
  };

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Formulario enviado!', this.usuario);
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      alert('Formulario enviado correctamente');
    }
  }
}