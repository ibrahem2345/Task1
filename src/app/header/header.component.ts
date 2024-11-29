import { Component, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service'; // Import the SearchService

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() searchUser = new EventEmitter<string>(); // You can remove this if using the service

  constructor(private searchService: SharedService) {}

  onSearch(event: any): void {
    const searchTerm = event.target.value;
    this.searchService.setSearchTerm(searchTerm); // Pass the search term to the service
  }
}
