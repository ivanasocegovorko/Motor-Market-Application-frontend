import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicle-new',
  templateUrl: './vehicle-new.component.html',
  styleUrl: './vehicle-new.component.css'
})
export class VehicleNewComponent implements OnInit{

  newVehicle: Vehicle = new Vehicle();

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
  }

  addVehicle() {
    this.vehicleService.createVehicle(this.newVehicle).subscribe(() => {
      window.alert("Posted New Vehicle Successfully");
      this.router.navigate(['vehicle']);
    }, (error: { status: number; }) => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    });
  }
}
