import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {ApiLicenseService} from "../service/api-license.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'logpage';

  constructor(private router: Router, private authService: AuthService, private apiLicenseService: ApiLicenseService) {
  }

  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe();
  }

  logout(): void {
    this.authService.logout().subscribe(value => {
      console.log(value);
    });
  }

  getApiLicence() {
    this.apiLicenseService.getApiLicence().subscribe((data) => {
      console.log(data);
    });
  }
}
