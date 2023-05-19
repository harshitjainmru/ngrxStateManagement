import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTrainingsRoutingModule } from './requested-trainings-routing.module';
import { RequestedTrainingsComponent } from './requested-trainings.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    RequestedTrainingsComponent
  ],
  imports: [
    CommonModule,
    RequestedTrainingsRoutingModule,
    SharedModule
  ]
})
export class RequestedTrainingsModule { }
