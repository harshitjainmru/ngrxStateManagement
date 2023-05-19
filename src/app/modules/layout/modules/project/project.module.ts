import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    ProjectComponent,
    GridViewComponent,
    ListViewComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AbsoluteRoutingModule,
    MatIconModule,
    SharedModule,

  ],
})
export class ProjectModule { }
