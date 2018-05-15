import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { IAppConfig, AppConfig, APP_CONFIG } from '@app/config';

@Injectable()
export class AuthGuardService implements CanActivate {

  public appConfig: IAppConfig;

  constructor(
    @Inject(APP_CONFIG) appConfig: IAppConfig,
    private authService: AuthService,
    private router: Router) {
      this.appConfig = appConfig;
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isActive = true;
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.authService.redirectUrl = state.url;
      this.router.navigate([this.appConfig.routes.auth]);
      return false;
    }
  }
}
