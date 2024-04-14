import { Component, OnInit } from '@angular/core';
import { Vehicle } from "C:/Users/Ivana/Desktop/team-stranger-strings-frontend/src/app/models/vehicle";
import { VehicleService } from 'C:/Users/Ivana/Desktop/team-stranger-strings-frontend/src/app/services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'C:/Users/Ivana/Desktop/team-stranger-strings-frontend/src/app/models/user';
import { UserService } from 'C:/Users/Ivana/Desktop/team-stranger-strings-frontend/src/app/services/user.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit {

  vehicleList: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private userService: UserService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe((vehicle: Vehicle[]) => {
      this.vehicleList = vehicle;
      console.log(this.vehicleList);
    });
  }
}
