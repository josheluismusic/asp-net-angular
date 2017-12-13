import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../app/components/home/home.component'
import { VehicleFormComponent } from '../app/components/vehicle-form/vehicle-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehicle/new', component: VehicleFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
