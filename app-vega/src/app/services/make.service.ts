import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/Rx'

@Injectable()
export class MakeService {

  constructor(private httpClient: HttpClient) { }

  getMakes() {
    return this.httpClient.get('http://localhost:5000/api/makes')
                          .map((res: any[]) => res);
  }

}
