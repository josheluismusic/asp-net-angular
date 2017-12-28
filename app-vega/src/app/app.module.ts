import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

/*Modules */
import { AppRoutingModule } from './app.routes'

import { ToastyModule } from 'ng2-toasty';


/*Service */
import { VehicleService } from './services/vehicle.service';

/*Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './app.error-handler';
import { RouterModule } from '@angular/router';


Raven
  .config('https://5dce6541ac604a659889f1114e6d3ccc@sentry.io/263516')
  .install();

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
    RouterModule,
    ToastyModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ToastyModule.forRoot()
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler},
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
