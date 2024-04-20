import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map, startWith } from 'rxjs';
import { VehicleService } from '../../services/vehicle.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  Email: string = "";
  currentEmail: string | null = null;
  user: any = "";
  constructor(private vehicleService: VehicleService, private userService: UserService, private router: Router, private route: ActivatedRoute) {this.route.params.subscribe(params => {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Extract Email from the current route
      const EmailFromRoute = this.route.firstChild?.snapshot.params['Email'];
      this.currentEmail = EmailFromRoute || null;
    });
  }); }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.Email = params['Email'];
      this.loadUserData();
    });
  }

  loadUserData() {
    // Fetch user details based on the Email
    this.userService.getUserByEmail(this.Email).subscribe(
      (user: User) => {
        console.log('User details retrieved successfully:', user);
        this.user = user;
      },
      (error) => {
        console.log('Error retrieving user details:', error);
      }
    );
  }
  editUser() {
    this.userService.updateUser(this.user).subscribe(
      (updatedUser: User) => {
        console.log('User details updated successfully:', updatedUser);
        this.router.navigateByUrl(`/user/${this.Email}`);
      },
      (error) => {
        console.log('Error updating user details:', error);
      }
    );
  }

  
  isLoggedIn(vehicleEmail: string | undefined): boolean {
    const token = localStorage.getItem('myPostToken');
    
    // Check if the token is present and vehicleEmail is defined
    if (token && vehicleEmail) {
      // Extract Email from the token
      const EmailFromToken = this.extractEmailFromToken(token);
  
      // Compare the extracted Email with the Email of the current vehicle
      return EmailFromToken === vehicleEmail;
    }
  
    return false;
  }
  extractEmailFromToken(token: string): string {
    const decodedToken: { [key: string]: any } = this.parseJwt(token);
    return decodedToken['unique_name'] || '';
  }

  parseJwt(token: string): { [key: string]: any } {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(jsonPayload);
  }
}
