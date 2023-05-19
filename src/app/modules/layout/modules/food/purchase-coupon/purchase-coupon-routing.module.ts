import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseCouponComponent } from './purchase-coupon.component';

const routes: Routes = [
  {path:'',component:PurchaseCouponComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseCouponRoutingModule { }
