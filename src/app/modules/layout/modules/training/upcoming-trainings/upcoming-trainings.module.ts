import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingsRoutingModule } from './upcoming-trainings-routing.module';
import { UpcomingTrainingsComponent } from './upcoming-trainings.component';
import { MatButtonModule } from '@angular/material/button';
import { CancelEnrollmentModule } from './cancel-enrollment/cancel-enrollment.module';


@NgModule({
  declarations: [
    UpcomingTrainingsComponent,
  ],
  imports: [
    CommonModule,
    UpcomingTrainingsRoutingModule,
    MatButtonModule,
    CancelEnrollmentModule
  ],
})
export class UpcomingTrainingsModule { }
