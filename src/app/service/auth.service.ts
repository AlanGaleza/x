import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const httpParams = new HttpParams().set('username', username).set('password', password);
    console.log(httpParams.toString());
    return this.httpClient.post('/login', httpParams.toString(), {headers});
  }

  logout() {
    return this.httpClient.post('/logout', {});
  }
}
