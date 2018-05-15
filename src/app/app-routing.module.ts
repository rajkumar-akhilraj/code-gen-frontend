import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppConfig, APP_CONFIG } from '@app/config';
import { AuthGuardService } from '@app/core';

import { ProjectModule } from '@app/project';
import { AuthModule } from '@app/auth';

import { NotFoundComponent } from '@app/core';

const routes: Routes = [
  { path: '', redirectTo: '/' + AppConfig.routes.project, pathMatch: 'full' },
  {
    path: AppConfig.routes.project,
    loadChildren: '@app/project/project.module#ProjectModule',
    canActivate: [AuthGuardService]
  },
  {
    path: AppConfig.routes.auth,
    loadChildren: '@app/auth/auth.module#AuthModule'
  },
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuardService]},
]

@NgModule ({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
