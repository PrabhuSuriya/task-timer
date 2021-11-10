import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface JournalEntry {
  title: string;
  body: string;
  timestamp?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class JournalEntriesService {
  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get<JournalEntry[]>('/api/entries');
  }

  save(entry: JournalEntry) {
    return this.http.post('/api/entries', entry);
  }

  delete(id: number) {
    return this.http.delete(`/api/entries/${id}`);
  }
}
