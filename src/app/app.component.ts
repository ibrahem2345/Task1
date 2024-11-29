import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';  // Import UserListComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(UserListComponent) userListComponent!: UserListComponent; // Get reference to UserListComponent

  // Called after the view is initialized
  ngAfterViewInit(): void {
    if (this.userListComponent) {
      console.log('UserListComponent is available:', this.userListComponent);
    }
  }

  // Handle the search term coming from HeaderComponent
  handleSearch(searchTerm: string): void {
    if (this.userListComponent) {
      this.userListComponent.handleSearch(searchTerm); // Call handleSearch in UserListComponent
    }
  }
}
