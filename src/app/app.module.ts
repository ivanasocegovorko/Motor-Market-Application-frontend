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
import { VehicleDetailComponent} from './components/vehicle-detail/vehicle-detail.component';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';

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
    RouterModule.forRoot(routes),
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }