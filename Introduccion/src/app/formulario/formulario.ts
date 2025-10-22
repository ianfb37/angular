import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  // Propiedades del formulario
  nombre: string = '';
  email: string = '';
  tipoInvitado: string = '';
  disfraz: string = '';
  fechaLlegada: string = '';
  aceptaReglas: boolean = false;

  // Estados de validación
  formSubmitted: boolean = false;
  fieldErrors: { [key: string]: boolean } = {
    nombre: false,
    email: false,
    tipoInvitado: false,
    disfraz: false,
    fechaLlegada: false,
    aceptaReglas: false
  };

  // Mensajes de error temáticos
  errorMessages: { [key: string]: string } = {
    nombre: '👻 Este campo da más miedo vacío, ¡rellénalo!',
    email: '🩸 Ese correo parece maldito… revisa el formato.',
    tipoInvitado: '🧛‍♂️ ¡Even los fantasmas eligen su tipo!',
    disfraz: '🎭 ¿Vas a venir invisible? ¡Describe tu disfraz!',
    fechaLlegada: '📅 Esa fecha ya es historia de terror... usa una futura',
    aceptaReglas: '⚰️ ¡Debes jurar no morder a otros invitados!'
  };

  enviarFormulario() {
    this.formSubmitted = true;
    
    // Validar todos los campos
    const esValido = this.validarFormulario();
    
    if (esValido) {
      this.mostrarMensajeExito();
    } else {
      this.mostrarErrores();
    }
  }

  validarFormulario(): boolean {
    let esValido = true;

    // Validar nombre
    this.fieldErrors['nombre'] = !this.nombre || this.nombre.length < 3;
    if (this.fieldErrors['nombre']) esValido = false;

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.fieldErrors['email'] = !this.email || !emailRegex.test(this.email);
    if (this.fieldErrors['email']) esValido = false;

    // Validar tipo de invitado
    this.fieldErrors['tipoInvitado'] = !this.tipoInvitado;
    if (this.fieldErrors['tipoInvitado']) esValido = false;

    // Validar disfraz
    this.fieldErrors['disfraz'] = !this.disfraz || this.disfraz.length < 5;
    if (this.fieldErrors['disfraz']) esValido = false;

    // Validar fecha
    this.fieldErrors['fechaLlegada'] = !this.fechaLlegada || !this.validarFechaFutura();
    if (this.fieldErrors['fechaLlegada']) esValido = false;

    // Validar reglas
    this.fieldErrors['aceptaReglas'] = !this.aceptaReglas;
    if (this.fieldErrors['aceptaReglas']) esValido = false;

    return esValido;
  }

  validarFechaFutura(): boolean {
    if (!this.fechaLlegada) return false;
    const fechaSeleccionada = new Date(this.fechaLlegada);
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0); // Ignorar la hora
    return fechaSeleccionada >= fechaActual;
  }

  mostrarErrores() {
    // Los errores ya están configurados en fieldErrors
    console.log('🧟‍♂️ El formulario tiene errores:', this.fieldErrors);
  }

  mostrarMensajeExito() {
    const mensajeExito = `🎃 ¡Bienvenido/a, ${this.nombre}! Tu entrada para la fiesta del castillo ha sido registrada con éxito.`;
    
    // Mostrar mensaje de éxito
    const successElement = document.getElementById('successMessage');
    if (successElement) {
      successElement.textContent = mensajeExito;
      successElement.classList.add('show');
    }

    // Opcional: Limpiar formulario después de éxito
    setTimeout(() => {
      this.limpiarFormulario();
      if (successElement) {
        successElement.classList.remove('show');
      }
    }, 5000);
  }

  limpiarFormulario() {
    this.nombre = '';
    this.email = '';
    this.tipoInvitado = '';
    this.disfraz = '';
    this.fechaLlegada = '';
    this.aceptaReglas = false;
    this.formSubmitted = false;
    
    // Limpiar errores
    Object.keys(this.fieldErrors).forEach(key => {
      this.fieldErrors[key] = false;
    });
  }

  // Validación en tiempo real
  validarCampo(campo: string) {
    if (!this.formSubmitted) return;
    
    switch (campo) {
      case 'nombre':
        this.fieldErrors['nombre'] = !this.nombre || this.nombre.length < 3;
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.fieldErrors['email'] = !this.email || !emailRegex.test(this.email);
        break;
      case 'tipoInvitado':
        this.fieldErrors['tipoInvitado'] = !this.tipoInvitado;
        break;
      case 'disfraz':
        this.fieldErrors['disfraz'] = !this.disfraz || this.disfraz.length < 5;
        break;
      case 'fechaLlegada':
        this.fieldErrors['fechaLlegada'] = !this.fechaLlegada || !this.validarFechaFutura();
        break;
      case 'aceptaReglas':
        this.fieldErrors['aceptaReglas'] = !this.aceptaReglas;
        break;
    }
  }

  // Getter para clases CSS
  getFieldClass(campo: string): string {
    return this.fieldErrors[campo] ? 'error ghost-effect' : '';
  }

  // Contador de caracteres para nombre
  getNombreCount(): string {
    const count = this.nombre.length;
    const min = 3;
    return `${count}/${min} caracteres ${count >= min ? '✅' : '👻'}`;
  }

  // Contador de caracteres para disfraz
  getDisfrazCount(): string {
    const count = this.disfraz.length;
    const min = 5;
    return `${count}/${min} caracteres ${count >= min ? '✅' : '🎭'}`;
  }
}