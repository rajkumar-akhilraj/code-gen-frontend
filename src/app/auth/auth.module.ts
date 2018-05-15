import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { AuthRoutingModule } from './auth-routing.module';
import { CoreModule } from '@app/core';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthService } from '@app/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: []
})
export class AuthModule { }
