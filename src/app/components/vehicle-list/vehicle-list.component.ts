import { Component, OnInit } from '@angular/core';
import { Vehicle } from "../../models/vehicle";
import { VehicleService } from '../../services/vehicle.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'

})
export class VehicleListComponent implements OnInit {

  vehicleList: Vehicle[] = [];

  token = localStorage.getItem("token")!;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe((vehicle: Vehicle[]) => {
      this.vehicleList = vehicle;
      console.log(this.vehicleList);
    });

  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('myPostToken');
  }


  onDelete(VehicleId: number) {
    this.vehicleService.deleteVehicle(VehicleId).subscribe(response => {
      window.alert("Deleted Vehicle Listing Successfully");
      this.vehicleService.getAllVehicles().subscribe(vehicle=> {
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
