import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private searchSource = new Subject<string>();
  search$ = this.searchSource.asObservable(); // Observable to subscribe to in the UserListComponent

  setSearchTerm(term: string): void {
    this.searchSource.next(term); // Emit the new search term
  }
}
