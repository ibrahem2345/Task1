import { Component, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() searchUser = new EventEmitter<string>(); 

  constructor(private searchService: SharedService) {}

  onSearch(event: any): void {
    const searchTerm = event.target.value;
    this.searchService.setSearchTerm(searchTerm); 
  }
}
