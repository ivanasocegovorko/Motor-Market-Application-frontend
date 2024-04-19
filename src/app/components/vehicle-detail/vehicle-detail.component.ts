import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [MatCardModule,],
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.css'
})
export class VehicleDetailComponent implements OnInit{
  id: number = 0;

  currentVehicle: Vehicle = new Vehicle()

  constructor(private vehicleService: VehicleService, private actRoute: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.vehicleService.getVehicleById(this.id).subscribe(foundVehicle => {
      this.currentVehicle = foundVehicle;
    });
  }

  onDelete(id: number) {
    this.vehicleService.deleteVehicle(id).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/vehicle")
    });
  }
}
