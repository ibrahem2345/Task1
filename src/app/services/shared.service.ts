import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private searchSource = new Subject<string>();
  search$ = this.searchSource.asObservable();

  setSearchTerm(term: string): void {
    this.searchSource.next(term);
  }
}
