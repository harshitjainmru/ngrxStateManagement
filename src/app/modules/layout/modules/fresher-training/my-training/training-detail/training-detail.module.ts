import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { TrainingDetailRoutingModule } from './training-detail-routing.module';
import { TrainingDetailsComponent } from './training-details.component';
import { SubTopicsComponent } from './sub-topics/sub-topics.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { TrainingTopicComponent } from './training-topic/training-topic.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { BreadcrumbModule } from 'src/app/modules/shared/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    TrainingDetailsComponent,
    SubTopicsComponent,
    AttendanceComponent,
    TrainingTopicComponent,
  ],
  imports: [
    CommonModule,
    TrainingDetailRoutingModule,
    MatTabsModule,
    AbsoluteRoutingModule,
    MatButtonModule,
    SharedModule,
    BreadcrumbModule
  ]
})
export class TrainingDetailModule { }
