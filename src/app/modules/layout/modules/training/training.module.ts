import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { StoreModule } from '@ngrx/store';
import { getTrainingReducer } from './trainingStore/training.reducer';
import { training } from './trainingStore/training.selector';


@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    StoreModule.forFeature(training,getTrainingReducer)
  ]
})
export class TrainingModule { }
