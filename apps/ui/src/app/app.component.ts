import { Component } from '@angular/core';
import { TaskService } from './services/task/task.service';

import { Task } from '@task-timer/common';

@Component({
  selector: 'task-timer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  entries: Task[] = [];

  constructor(private dataService: TaskService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.dataService.fetch().subscribe({
      next: (response: Task[]) => (this.entries = response)
    });
  }

  onSaveEntry(titleInput: HTMLInputElement, bodyInput: HTMLInputElement) {
    const entry = {
      title: titleInput.value,
      body: bodyInput.value
    };
    this.dataService.save(entry).subscribe({
      next: () => {
        this.fetch();
        titleInput.value = '';
        bodyInput.value = '';
      }
    });
  }

  onDeleteEntry(index: number) {
    this.dataService.delete(index).subscribe({
      next: () => {
        this.fetch();
      }
    });
  }
}
