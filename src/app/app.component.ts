import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-user-management';
}
