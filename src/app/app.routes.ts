import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleNewComponent } from './components/vehicle-new/vehicle-new.component';
import { VehicleEditComponent } from './components/vehicle-edit/vehicle-edit.component';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

export const routes: Routes = [
    { 
        path: "",
        redirectTo: "/signin",
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
      {
        path: "user/:email",
        component: UserComponent
      },{
        path: "user/:email/edit",
        component: UserEditComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }