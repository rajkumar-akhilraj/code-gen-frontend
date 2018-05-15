import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAppConfig, AppConfig, APP_CONFIG } from '@app/config';

@Injectable()
export class AuthService {
  public isLoggedIn: boolean;
  public redirectUrl: string;
  public appConfig: IAppConfig;

  constructor(
    @Inject(APP_CONFIG) appConfig: IAppConfig,
    private http: HttpClient,
    private router: Router) {
    this.appConfig = appConfig;
  }

  login() {
    this.isLoggedIn = true;
    if (this.redirectUrl) {
        this.router.navigate([this.redirectUrl]);
        this.redirectUrl = null;
    } else {
      this.router.navigate(['/' + this.appConfig.routes.project]);
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/' + this.appConfig.routes.auth]);
  }
}
