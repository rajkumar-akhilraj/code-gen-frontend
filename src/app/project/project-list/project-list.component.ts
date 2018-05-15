import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public logoutClicked() {
    this.authService.logout();
  }
}
