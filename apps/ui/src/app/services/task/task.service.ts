import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from '@task-timer/common';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get<Task[]>(`/api/entries`);
  }

  save(entry: Task) {
    return this.http.post(`/api/entries`, entry);
  }

  delete(id: number) {
    return this.http.delete(`/api/entries/${id}`);
  }
}
