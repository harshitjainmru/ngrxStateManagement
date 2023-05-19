import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_MY_PERFORMANCE, ABS_LAYOUT_REVIEW } from 'src/app/constants/absolute-routes';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  {path:'',component:ReviewsComponent,children:[
    {
      path:ABS_LAYOUT_MY_PERFORMANCE.path,
      loadChildren:() =>
      import('./my-performance/my-performance.module').then((m)=>m.MyPerformanceModule)
    },
    {
      path:ABS_LAYOUT_REVIEW.path,
      loadChildren:() =>
      import('./review/review.module').then((m)=>m.ReviewModule)
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
