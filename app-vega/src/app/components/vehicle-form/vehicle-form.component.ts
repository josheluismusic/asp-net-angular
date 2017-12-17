import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styles: []
})
export class VehicleFormComponent implements OnInit {

  makes: any[];
  models: any[];
  features: any[];
  vehicle: any = {
    make: null
  };

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes
      console.log('makes', makes);
    })

    this.vehicleService.getFeatures().subscribe(f => {
      this.features = f
      console.log('makes', f);
    })


  }

  onMakeChange() {
    let selectMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectMake ? selectMake.models : [];
  }

}
