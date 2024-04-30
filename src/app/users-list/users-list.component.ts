import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, NgFor, NgIf, HeaderComponent, MatButtonModule, MatProgressSpinnerModule, FormsModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users: any;
  currentPage: number = 1;
  isLoading = true;
  constructor(private userApi : UsersService) { }

  ngOnInit(): void {
    this.fetchUsers(this.currentPage);
  }
  fetchUsers(page: number) {
    this.userApi.getUsers(page).subscribe(
      response => {
        this.users = response.data;
        this.isLoading = false;
      },
      error => {
        console.log('Error fetching users:', error);
      }
    );
  }

  nextPage() {
    if (this.currentPage <= 1) {
      this.currentPage++;
      this.fetchUsers(this.currentPage);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchUsers(this.currentPage);
    }
  }



  searchTerm: string = "";
  displayedUsers : any;
  searchUsers() {
    // Implement logic to search users based on searchTerm
    const filteredUsers = this.users.filter((user : any) => user.id == this.searchTerm);
    // Update the displayed users (consider using a separate property)
    if(this.searchTerm){
      this.displayedUsers = filteredUsers;
    }else{
      this.displayedUsers = this.users
    }
    console.log(this.displayedUsers)
    console.log(this.searchTerm)
  }

}
