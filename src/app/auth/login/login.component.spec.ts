import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AuthService } from '@app/core';
import { LoginComponent } from './login.component';
import { IAppConfig, AppConfig, APP_CONFIG } from '@app/config';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
  rootComponentType = ''
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let config = APP_CONFIG;
  // let authService = new AuthService(AppConfig, new Router());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthService, useClass: AuthService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
