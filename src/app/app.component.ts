import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  user: User = new User;
  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logout().subscribe(
      () => {
        this.router.navigate(['login']);
      },
      (error) => {
        console.error('Logout error:', error);
      }
    );
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('myPostToken');
  }
  getProfile() {
    this.userService.getCurrentUser().subscribe(
      (user: User) => {
        if (user && user.Email) {
          this.userService.getUserByEmail(user.Email).subscribe(
            (userByEmail: User) => {
              if (userByEmail) {
                this.router.navigate(['user', userByEmail.Email, 'post']);
              } else {
                console.error('User not found');
              }
            },
            (error) => {
              console.error('Get user by Email error:', error);
            }
          );
        } else {
          console.error('Current user not found');
        }
      },
      (error) => {
        console.error('Get profile error:', error);
      }
    );
  }
}
