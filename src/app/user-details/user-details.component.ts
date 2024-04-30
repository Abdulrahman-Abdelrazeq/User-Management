import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersService } from '../services/users.service';
import { HeaderComponent } from '../header/header.component';
import { NgIf } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HeaderComponent, NgIf, MatProgressSpinnerModule, RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: any;
  isLoading = true;
  constructor(private activatedRoute: ActivatedRoute, private userData : UsersService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const userId = params.get('id');
      console.log(userId)
      // Fetch user details based on userId (logic not shown here)
      this.userData.getUserDetails(userId).subscribe(res => {
        this.user = res.data;
        this.isLoading = false;
      }); // Replace with your logic to fetch user details
    });
  }
}
