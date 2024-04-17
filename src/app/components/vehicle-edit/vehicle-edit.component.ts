import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle';
import { UserService } from '../../services/user.service';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrl: './vehicle-edit.component.css'
})
export class VehicleEditComponent implements OnInit {

  id: string = "0";
  
  currentVehicle: Vehicle = new Vehicle  ();

  constructor(private vehicleService: VehicleService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.vehicleService.getVehicle(routeId).subscribe(foundVehicle => {
      console.log(foundVehicle);
      this.currentVehicle = foundVehicle;
    });
  }

  onSubmit () {
    this.vehicleService.editVehicle(this.id, this.currentVehicle).subscribe(edditedVehicle => {
      console.log(edditedVehicle);
      window.alert("Edited Vehicle Listing Successfully");
      this.router.navigate(['vehicle']);
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    })
  }

}
