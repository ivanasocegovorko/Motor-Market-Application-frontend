import { AppRoutingModule, routes } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule } from '@angular/router';
import { Vehicle } from './models/vehicle';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleNewComponent } from './components/vehicle-new/vehicle-new.component';
import { VehicleEditComponent } from './components/vehicle-edit/vehicle-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    UserEditComponent,
    UserComponent,
    VehicleListComponent,
    VehicleNewComponent,
    VehicleEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }