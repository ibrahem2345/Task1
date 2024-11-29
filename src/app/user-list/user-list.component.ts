import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  totalUsers = 0;
  private searchSubscription!: Subscription;

  constructor(private apiService: UserService, private router: Router, private searchService: SharedService) {}

  ngOnInit() {
    this.fetchUsers(1);
    this.searchSubscription = this.searchService.search$.subscribe(searchTerm => {
      this.handleSearch(searchTerm);
    });
  }
  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
  fetchUsers(page: number) {
    this.apiService.getUsers(page).subscribe((response) => {
      this.users = response.data;
      this.totalUsers = response.total;
    });
  }
  onPageChange(event: any) {
    this.fetchUsers(event.pageIndex + 1);
  }
  viewUserDetails(id: number) {
    this.router.navigate(['/user', id]);
  }
  handleSearch(searchTerm: string): void {
    if (!searchTerm) {
      this.fetchUsers(1);
      return;
    }
    const userId = parseInt(searchTerm, 10);
    if (isNaN(userId)) {
      return;
    }
    this.apiService.getUserById(userId).subscribe(
      (response) => {
        this.users = [response.data];
        this.totalUsers = 1;
      },
      (error) => {
        this.users = [];
        this.totalUsers = 0;
      }
    );
  }
}
