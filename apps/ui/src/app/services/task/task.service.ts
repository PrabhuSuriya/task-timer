import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from '@task-timer/common';
import { environment } from 'apps/ui/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get<Task[]>(`${environment.api}/api/entries`);
  }

  save(entry: Task) {
    return this.http.post(`${environment.api}/api/entries`, entry);
  }

  delete(id: number) {
    return this.http.delete(`${environment.api}/api/entries/${id}`);
  }
}
