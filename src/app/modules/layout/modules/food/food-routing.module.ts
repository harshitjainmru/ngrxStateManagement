import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_DINNER, ABS_LAYOUT_FOOD, ABS_LAYOUT_PURCHASE_COUPON } from 'src/app/constants/absolute-routes';
import { FoodComponent } from './food.component';

const routes: Routes = [
  {
    path: '',
    component: FoodComponent,
    children: [
      {
        path: ABS_LAYOUT_FOOD.path,
        loadChildren: () =>
          import('./lunch-coupon/lunch-coupon.module').then(
            (m) => m.LunchCouponModule
          ),
      },
      {
        path: ABS_LAYOUT_DINNER.path,
        loadChildren: () =>
          import('./request-dinner/request-dinner.module').then(
            (m) => m.RequestDinnerModule
          ),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
