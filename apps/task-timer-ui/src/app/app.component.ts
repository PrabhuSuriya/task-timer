import { Component } from '@angular/core';
import { JournalEntriesService, JournalEntry } from './services/journal-entries/journal-entries.service';

@Component({
  selector: 'task-timer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  entries: JournalEntry[] = [];

  constructor(private dataService: JournalEntriesService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.dataService.fetch().subscribe({
      next: (response: JournalEntry[]) => (this.entries = response)
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
