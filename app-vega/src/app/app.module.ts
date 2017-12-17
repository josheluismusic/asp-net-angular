import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

/*Modules */
import { AppRoutingModule } from './app.routes'

/*Service */
import { VehicleService } from './services/vehicle.service';

/*Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VehicleFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
