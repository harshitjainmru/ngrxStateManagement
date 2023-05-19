import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseCouponRoutingModule } from './purchase-coupon-routing.module';
import { PurchaseCouponComponent } from './purchase-coupon.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CouponLegendModule } from '../coupon-legend/coupon-legend.module';
import { CalendarModule } from '../calendar/calendar.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { AmountDueModule } from 'src/app/modules/shared/amount-due/amount-due.module';
import { NoteModule } from 'src/app/modules/shared/note/note.module';


@NgModule({
  declarations: [
    PurchaseCouponComponent
  ],
  imports: [
    CommonModule,
    PurchaseCouponRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CouponLegendModule,
    CalendarModule,
    CommonInputModule,
    AmountDueModule,
    NoteModule,

  ]
})
export class PurchaseCouponModule { }
