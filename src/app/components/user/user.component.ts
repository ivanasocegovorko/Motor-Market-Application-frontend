import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map, startWith } from 'rxjs';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  vehicleList: Vehicle[] = [];
  Email: string = "";
  currentEmail: string | null = null;
  newVehicle: Vehicle = new Vehicle();
  user: any = "";

  constructor(private vehicleService: VehicleService,private userService: UserService, private router: Router, private route: ActivatedRoute) {this.route.params.subscribe(params => {
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
      this.loadUservehicles();
    });
  }

  loadUserData() {
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
  loadUservehicles() {
    console.log('Loading user vehicles for:', this.Email);
    
    this.vehicleService.getUsersVehicles(this.Email).subscribe(
      (uservehicles: Vehicle[]) => {
        console.log('User vehicles retrieved successfully:', uservehicles);
        this.vehicleList = uservehicles;
      },
      (error) => {
        console.log('Error retrieving user vehicles:', error);
      }
    );
  }

  deleteVehicle(vehicle: Vehicle) {
    if (vehicle.vehicleId)
      this.vehicleService.deleteVehicle(vehicle.vehicleId).subscribe(() => {
        this.vehicleList = this.vehicleList.filter(c => c.vehicleId !== vehicle.vehicleId);
        this.router.navigateByUrl(`/user/${vehicle.userId}/vehicle`);
      }, (error) => {
        console.log('Error: ', error);
        if (error.status === 401 || error.status === 403) {
          this.router.navigate(['signin']);
        }
      });
  }
  createVehicle() {
    this.vehicleService.createVehicle(this.newVehicle).subscribe(() => {
      window.alert("Created vehicle Successfully");
      this.router.navigate(['vehicle']);
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    });
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

  onDelete(VehicleId: number) {
    this.vehicleService.deleteVehicle(VehicleId).subscribe(response => {
      window.alert("Deleted Vehicle Listing Successfully");
      this.vehicleService.getUsersVehicles(this.Email).subscribe(vehicle=> {
        this.vehicleList = vehicle;
      });
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    });
  }
}