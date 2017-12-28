import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { ToastyService } from 'ng2-toasty';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


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
        this.vehicle = data[2]
      }
    }, error => {
        if(error.status == 404)
          this.router.navigate(['/home'])
    })
    /*
    if(this.vehicle.id > 0) {
      this.vehicleService.getVehicle(this.vehicle.id)
          .subscribe(v => {
            this.vehicle = v;
          },
          error => {
            if(error.status == 404)
              this.router.navigate(['/home'])
          })
    }

    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes
      //console.log('makes', makes);
      this.vehicleService.getFeatures().subscribe(f => {
        this.features = f
        //console.log('makes', f);
      })

    })
    */

    


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
