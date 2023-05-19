import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInterviewRoutingModule } from './my-interview-routing.module';
import { MyInterviewComponent } from './my-interview.component';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    MyInterviewComponent
  ],
  imports: [
    CommonModule,
    MyInterviewRoutingModule,
    DropDownModule,
    SharedModule
  ]
})
export class MyInterviewModule { }
