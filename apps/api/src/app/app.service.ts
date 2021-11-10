import { Injectable } from '@nestjs/common';
import { Task } from '@task-timer/common';
@Injectable()
export class AppService {

  entries: Task[] = [{
    title: 'example title',
    body: 'example journal entry',
    timestamp: new Date()
  }];

  getData(): Task[] {
    return this.entries;
  }

  create(entry: Task) {
    const newEntry = {
      title: entry.title,
      body: entry.body,
      timestamp: new Date()
    };

    this.entries = [...this.entries, newEntry];
  }

  delete(id: number) {
    this.entries = this.entries.filter((_, idx) => idx !== id);
  }
}
