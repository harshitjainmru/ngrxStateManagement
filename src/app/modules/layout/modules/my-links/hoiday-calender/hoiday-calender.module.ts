import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoidayCalenderRoutingModule } from './hoiday-calender-routing.module';
import { HolidayCalenderComponent } from './holiday-calender.component';


@NgModule({
  declarations: [
    HolidayCalenderComponent
  ],
  imports: [
    CommonModule,
    HoidayCalenderRoutingModule
  ]
})
export class HoidayCalenderModule { }
