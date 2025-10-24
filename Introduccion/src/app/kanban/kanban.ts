import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

// Interface para las tareas
interface Task {
  id: number;
  title: string;
  description: string;
  showDescription: boolean;
}

@Component({
  selector: 'app-kanban',
  imports: [
    CommonModule, 
    CdkDrag, 
    CdkDropList,
    MatIconModule
  ],
  templateUrl: './kanban.html',
  styleUrl: './kanban.css'
})
export class CdkDragDropConnectedSortingExample {
  todo: Task[] = [
    { 
      id: 1, 
      title: 'Ir al trabajo', 
      description: 'Llegar a la oficina para las 9:00 AM y revisar el correo electrónico.',
      showDescription: false 
    },
    { 
      id: 2, 
      title: 'Comprar víveres', 
      description: 'Comprar leche, pan, frutas y verduras en el supermercado.',
      showDescription: false 
    },
    { 
      id: 3, 
      title: 'Reunión de equipo', 
      description: 'Revisar el progreso del proyecto y planificar las próximas tareas.',
      showDescription: false 
    },
    { 
      id: 4, 
      title: 'Estudiar Angular', 
      description: 'Practicar componentes, servicios y rutas en Angular.',
      showDescription: false 
    }
  ];

  done: Task[] = [
    { 
      id: 5, 
      title: 'Levantarse', 
      description: 'Despertarse a las 7:00 AM y hacer la cama.',
      showDescription: false 
    },
    { 
      id: 6, 
      title: 'Cepillarse los dientes', 
      description: 'Lavarse los dientes después del desayuno.',
      showDescription: false 
    },
    { 
      id: 7, 
      title: 'Revisar correo', 
      description: 'Revisar y responder correos importantes del día.',
      showDescription: false 
    }
  ];

  toggleTaskDescription(taskId: number) {
    // Buscar en tareas por hacer
    const todoTask = this.todo.find(task => task.id === taskId);
    if (todoTask) {
      todoTask.showDescription = !todoTask.showDescription;
      return;
    }
    const doingtask = this.done.find(task => task.id === taskId);
    if (doingtask) {
      doingtask.showDescription = !doingtask.showDescription;
    }
    // Buscar en tareas completadas
    const doneTask = this.done.find(task => task.id === taskId);
    if (doneTask) {
      doneTask.showDescription = !doneTask.showDescription;
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}