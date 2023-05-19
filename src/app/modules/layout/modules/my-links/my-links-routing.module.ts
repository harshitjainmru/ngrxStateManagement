import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_HOLIDAY_CALENDER, ABS_LAYOUT_POLICY_DOC } from 'src/app/constants/absolute-routes';
import { MyLinksComponent } from './my-links.component';

const routes: Routes = [
  {path:'',component:MyLinksComponent ,children:[
    {
      path: ABS_LAYOUT_HOLIDAY_CALENDER.path,
      loadChildren: () =>
        import('./hoiday-calender/hoiday-calender.module').then((m) => m.HoidayCalenderModule),
    },
    {
      path:ABS_LAYOUT_POLICY_DOC.path,
      loadChildren:() =>
      import('./policy-doc/policy-doc.module').then((m)=>m.PolicyDocModule)
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLinksRoutingModule { }
