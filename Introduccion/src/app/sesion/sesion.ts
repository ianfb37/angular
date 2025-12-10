import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sesion',
  standalone: true,                    // <- Componente standalone
  templateUrl: './sesion.html',
  styleUrls: ['./sesion.css'],         // <- Añade el CSS aquí
  imports: [FormsModule, CommonModule] // <- Solo válido para standalone components
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