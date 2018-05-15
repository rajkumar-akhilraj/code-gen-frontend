import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* custom modules*/
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { AuthModule } from '@app/auth';
import { ProjectModule } from '@app/project';
import { APP_CONFIG, AppConfig } from '@app/config';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    ProjectModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
