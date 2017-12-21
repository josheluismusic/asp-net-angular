import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/Rx'

const BASE_URL: string = "http://localhost:5000/api/"

@Injectable()
export class VehicleService {

  constructor(private httpClient: HttpClient) { }


  getMakes() {
    return this.httpClient.get(`${BASE_URL}makes`)
                          .map((res: any[]) => res);
  }

  getFeatures() {
    return this.httpClient.get(`${BASE_URL}features`)
                          .map((res: any[]) => res);
  }

  create(vehicle) {
    return this.httpClient.post(`${BASE_URL}vehicles`, vehicle)
                          .map((res: any[]) => res);
  }
}
