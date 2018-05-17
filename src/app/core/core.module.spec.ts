import { CoreModule } from './core.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CommonModule } from '@angular/common';

/* custom services*/
import { AuthService } from './authentication/auth.service';
import { AuthGuardService } from './authentication/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';

describe('CoreModule', () => {
  let coreModule: CoreModule;
  let fixture: ComponentFixture<CoreModule>;

  beforeEach(() => {
    // TestBed.configureTestingModule(
    //   {
    //     imports: [
    //       CommonModule,
    //       CoreModule
    //     ],
    //     declarations: [
    //
    //     ],
    //     providers: [
    //       {provide: AuthService, useClass: AuthService},
    //       {provide: AuthGuardService, useClass: AuthGuardService}
    //     ]
    //   }
    // );
    // fixture = TestBed.createComponent(CoreModule);
    // coreModule = new CoreModule();
  });

  xit('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });
});
