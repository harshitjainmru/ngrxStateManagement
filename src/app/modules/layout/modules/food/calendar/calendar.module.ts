import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CouponLegendModule } from '../coupon-legend/coupon-legend.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    CouponLegendModule,
    FormsModule
  ],
  exports:[CalendarComponent]
})
export class CalendarModule { }
