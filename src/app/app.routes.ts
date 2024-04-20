import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleNewComponent } from './components/vehicle-new/vehicle-new.component';
import { VehicleEditComponent } from './components/vehicle-edit/vehicle-edit.component';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';

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
        path: "edit/:id",
        component: VehicleEditComponent
      },
      {
        path: "vehicle/:id",
        component: VehicleDetailComponent
      },
      {
        path: "user/:Email",
        component: UserComponent
      },{
        path: "user/:Email/edit",
        component: UserEditComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }