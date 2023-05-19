import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FresherTrainingRoutingModule } from './fresher-training-routing.module';
import { FresherTrainingComponent } from './fresher-training.component';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';


@NgModule({
  declarations: [
    FresherTrainingComponent
  ],
  imports: [
    CommonModule,
    FresherTrainingRoutingModule,
    ValidationModule
  ]
})
export class FresherTrainingModule { }
