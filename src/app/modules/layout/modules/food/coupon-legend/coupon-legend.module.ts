import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponLegendRoutingModule } from './coupon-legend-routing.module';
import { CouponLegendComponent } from './coupon-legend.component';


@NgModule({
  declarations: [
    CouponLegendComponent
  ],
  imports: [
    CommonModule,
    CouponLegendRoutingModule
  ],
    exports:[
    CouponLegendComponent

    ]
})
export class CouponLegendModule { }
