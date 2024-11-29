// user-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';
import { User, UserResponse } from '../user.model';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private apiService: UserService, private route: ActivatedRoute, private location : Location) {}
  
  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.apiService.getUserById(userId).subscribe((data) => (this.user = data.data));
  }
  goBack(): void {
    this.location.back(); // Use Location to navigate to the previous page
  }
  


}
