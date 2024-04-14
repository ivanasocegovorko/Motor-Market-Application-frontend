import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseURL: string = "http://localhost:4000/api/vehicle";

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Vehicle[]> {
      return this.http.get<Vehicle[]>(this.baseURL);
  }


  getVehicle(vehicleId: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.baseURL + "/" + vehicleId);
  }


  createVehicle(newVehicle: Vehicle) {
      return this.http.post(this.baseURL, newVehicle);
  }

  editVehicle(vehicleId: string, editedVehicle: Vehicle): Observable<Vehicle> {
      return this.http.put<Vehicle>(this.baseURL + "/" + vehicleId, editedVehicle);
  }

  deleteVehicle(vehicleId: string): Observable<any> {
    return this.http.delete<any>(this.baseURL + "/" + vehicleId)
  }
}
