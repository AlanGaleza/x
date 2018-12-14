import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiLicenseService {

  constructor(private httpClient: HttpClient) { }

  getApiLicence() {
    return this.httpClient.get('/api/license');
  }
}
