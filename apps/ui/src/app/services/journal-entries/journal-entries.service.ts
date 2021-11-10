import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from '@task-timer/common';
import { environment as env} from 'apps/ui/src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get<Task[]>(`${env.api_domain}/api/entries`);
  }

  save(entry: Task) {
    return this.http.post(`${env.api_domain}/api/entries`, entry);
  }

  delete(id: number) {
    return this.http.delete(`${env.api_domain}/api/entries/${id}`);
  }
}
