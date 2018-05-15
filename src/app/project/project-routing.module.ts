import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';

const projectRoutes: Routes = [
  { path: 'list', component: ProjectListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProjectRoutingModule {
}
