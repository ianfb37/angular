import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { MatDialogRef } from '@angular/material/dialog';

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
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
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

  doing: Task[] = [
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

  done: Task[] = [
    { 
      id: 8, 
      title: 'acabar proyecto', 
      description: 'Finalizar el proyecto de desarrollo web y enviarlo al cliente.',
      showDescription: false 
    },
  ];

  constructor(private dialog: MatDialog) {}

  toggleTaskDescription(taskId: number) {
    // Buscar en tareas por hacer
    const todoTask = this.todo.find(task => task.id === taskId);
    if (todoTask) {
      todoTask.showDescription = !todoTask.showDescription;
      return;
    }
    const doingtask = this.doing.find(task => task.id === taskId);
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

  deleteTask(taskId: number, column: string) {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      switch (column) {
        case 'todo':
          this.todo = this.todo.filter(task => task.id !== taskId);
          break;
        case 'doing':
          this.doing = this.doing.filter(task => task.id !== taskId);
          break;
        case 'done':
          this.done = this.done.filter(task => task.id !== taskId);
          break;
      }
    }
  }

  openAddTaskDialog() {
    const dialogRef = this.dialog.open(AddTaskDialog, {
      width: '400px',
      data: { title: '', description: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title.trim()) {
        const newTask: Task = {
          id: this.generateId(),
          title: result.title,
          description: result.description,
          showDescription: false
        };
        this.todo.push(newTask);
      }
    });
  }

  private generateId(): number {
    return Math.max(...this.todo.map(t => t.id), ...this.doing.map(t => t.id), ...this.done.map(t => t.id), 0) + 1;
  }
}

// Componente de diálogo para añadir tareas
@Component({
  selector: 'add-task-dialog',
  template: `
    <h2 mat-dialog-title>Añadir Nueva Tarea</h2>
    <mat-dialog-content>
      <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
        <mat-label>Título</mat-label>
        <input matInput [(ngModel)]="data.title" placeholder="Ingresa el título de la tarea">
      </mat-form-field>
      <mat-form-field appearance="outline" style="width: 100%;">
        <mat-label>Descripción</mat-label>
        <textarea matInput [(ngModel)]="data.description" placeholder="Ingresa la descripción de la tarea" rows="4"></textarea>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNoClick()">Cancelar</button>
      <button mat-raised-button color="primary" [mat-dialog-close]="data" [disabled]="!data.title.trim()">Añadir</button>
    </mat-dialog-actions>
  `,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class AddTaskDialog {
  constructor(
    public dialogRef: MatDialogRef<AddTaskDialog>
  ) {}

  data: { title: string; description: string } = { title: '', description: '' };

  onNoClick(): void {
    this.dialogRef.close();
  }
}