import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAppConfig, AppConfig, APP_CONFIG } from '@app/config';

@Injectable()
export class AuthService {
  public isLoggedIn: boolean;
  public redirectUrl: string;

  constructor(
    private router: Router) {
  }

  login() {
    this.isLoggedIn = true;
    if (this.redirectUrl) {
        this.router.navigate([this.redirectUrl]);
        this.redirectUrl = null;
    } else {
      this.router.navigate(['/' + AppConfig.routes.project]);
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/' + AppConfig.routes.auth]);
  }
}
