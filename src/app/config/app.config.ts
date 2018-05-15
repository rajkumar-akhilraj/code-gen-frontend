import { InjectionToken } from '@angular/core';
import { IAppConfig } from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    auth: 'auth',
    project: 'project',
    error404: '404'
  },
  snackBarDuration: 3000,
};
