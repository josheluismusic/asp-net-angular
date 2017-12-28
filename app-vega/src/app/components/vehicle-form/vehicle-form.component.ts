import * as _ from 'underscore'
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { ToastyService } from 'ng2-toasty';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SaveVehicle, Vehicle } from '../../models/vehicle';


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
    id: 0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      phone: '',
      email: ''
    }
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vehicleService: VehicleService,
              private toastyService: ToastyService) {
    
    route.params.subscribe(p => {
      /*if(p['id'] != 'new') {
        this.vehicle.id = +p['id']
      }
      */
      this.vehicle.id = +p['id']
    })
 
  }

  ngOnInit() {

    var sources = [
      this.vehicleService.getMakes(),
      this.vehicleService.getFeatures(),
    ] 

    if(this.vehicle.id)
      sources.push(this.vehicleService.getVehicle(this.vehicle.id));

     Observable.forkJoin(sources).subscribe(data => {
      this.makes = data[0];
      this.features = data[1];

      if(this.vehicle.id) {
        this.setVehicle(data[2]);
      }
    }, error => {
        if(error.status == 404)
          this.router.navigate(['/home'])
    })
  }

  private setVehicle(v: any) {
    this.vehicle.id = v.id;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered = v.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = _.pluck(v.features, 'id');

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
        .subscribe(x => console.log(x));       
  }

}
