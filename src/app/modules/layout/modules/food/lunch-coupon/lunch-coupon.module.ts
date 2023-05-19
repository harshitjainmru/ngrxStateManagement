import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchCouponRoutingModule } from './lunch-coupon-routing.module';
import { LunchCouponComponent } from './lunch-coupon.component';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { CouponLegendModule } from '../coupon-legend/coupon-legend.module';
import { CalendarModule } from '../calendar/calendar.module';
import { AmountDueModule } from 'src/app/modules/shared/amount-due/amount-due.module';
import { NoteModule } from 'src/app/modules/shared/note/note.module';
import { CouponHistoryComponent } from '../coupon-history/coupon-history.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LunchCouponComponent,
    CouponHistoryComponent

  ],
  imports: [
    CommonModule,
    LunchCouponRoutingModule,
    AbsoluteRoutingModule,
    CouponLegendModule,
    CalendarModule,
    AmountDueModule,
    NoteModule,
    MatIconModule
  ]
})
export class LunchCouponModule { }
