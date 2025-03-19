import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
  styles: ``
})
export class TaskPageComponent {

  tasks: string[] = [
    'buy groceries',
    'do laundry',
    'complete assignment',
    'go for a walk',
  ];
  filteredTasks: string[] = [...this.tasks];

  newTask: string = '';
  searchTerm: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
      this.filteredTasks = [...this.tasks];
      this.newTask = '';
    }
  }

  filterTasks() {
    if (this.searchTerm.trim()) {
      this.filteredTasks = this.tasks.filter((task) =>
        task.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredTasks = [...this.tasks];
    }
  }
}