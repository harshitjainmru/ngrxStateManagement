import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsTrainingRoutingModule } from './details-training-routing.module';
import { DetailsTrainingComponent } from './details-training.component';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbModule } from 'src/app/modules/shared/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    DetailsTrainingComponent
  ],
  imports: [
    CommonModule,
    DetailsTrainingRoutingModule,
    AbsoluteRoutingModule,
    MatButtonModule,
    BreadcrumbModule
  ]
})
export class DetailsTrainingModule { }
