import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_PURCHASE_COUPON } from 'src/app/constants/absolute-routes';
import { LunchCouponComponent } from './lunch-coupon.component';

const routes: Routes = [
  {path:'',component:LunchCouponComponent,pathMatch:'full'},
  {
    path: ABS_LAYOUT_PURCHASE_COUPON.path,
    loadChildren: () =>
      import('../purchase-coupon/purchase-coupon.module').then(
        (m) => m.PurchaseCouponModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LunchCouponRoutingModule { }
