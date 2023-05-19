import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningRoutingModule } from './job-opening-routing.module';
import { JobOpeningComponent } from './job-opening.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    JobOpeningComponent
  ],
  imports: [
    CommonModule,
    JobOpeningRoutingModule,
    SharedModule
  ]
})
export class JobOpeningModule { }
