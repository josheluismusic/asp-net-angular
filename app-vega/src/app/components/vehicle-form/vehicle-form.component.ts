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
    features: [],
    contact: {}
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
    let selectMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectMake ? selectMake.models : [];
    delete this.vehicle.modelId;
  }

  onFeatureToggle(featureId, $event) {
    if($event.target.checked)
      this.vehicle.features.push(featureId);
    else {
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }

  submit() {
    this.vehicleService.create(this.vehicle)
        .subscribe(
        res => {
          console.log(res)
        }, 
        err => {
          if(err.status == 400) {
            
          }  
        });
  }

}
