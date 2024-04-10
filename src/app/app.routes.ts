import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleNewComponent } from './components/vehicle-new/vehicle-new.component';
import { VehicleEditComponent } from './components/vehicle-edit/vehicle-edit.component';

export const routes: Routes = [
    { 
        path: "",
        redirectTo: "/vehicle",
        pathMatch: "full"
      },
      {
        path: "signin",
        component: SignInComponent
      },
      {
        path: "signup",
        component: SignUpComponent
      },
      {
        path: "vehicle",
        component: VehicleListComponent
      },
      {
        path: "vehicle/new",
        component: VehicleNewComponent
      },
      {
        path: "vehicle/:id",
        component: VehicleEditComponent
      },
];
