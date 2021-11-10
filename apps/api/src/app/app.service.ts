import { Injectable } from '@nestjs/common';

export interface JournalEntry {
  title: string;
  body: string;
  timestamp?: Date;
}

@Injectable()
export class AppService {

  entries: JournalEntry[] = [{
     title: 'example title',
     body: 'example journal entry',
    timestamp: new Date()
  }];

  getData(): JournalEntry[] {
    return this.entries;
  }

  create(entry: JournalEntry) {
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