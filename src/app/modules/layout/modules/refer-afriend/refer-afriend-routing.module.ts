import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_JOB_DETAIL, ABS_LAYOUT_JOB_OPENING, ABS_LAYOUT_REFER_LIST } from 'src/app/constants/absolute-routes';
import { ReferAFriendComponent } from './refer-afriend.component';

const routes: Routes = [
  {path:'',component:ReferAFriendComponent ,children:[
    {
      path: ABS_LAYOUT_JOB_OPENING.path,
      loadChildren: () =>
        import('./job-opening/job-opening.module').then((m) => m.JobOpeningModule),
    },
    {
      path:ABS_LAYOUT_REFER_LIST.path,
      loadChildren:() =>
      import('./referlist/referlist.module').then((m)=>m.ReferlistModule)
    },
    {
      path:`${ABS_LAYOUT_JOB_DETAIL.path}/:id`,
      loadChildren:() =>
      import('./job-opening/details/details.module').then((m)=>m.DetailsModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferAFriendRoutingModule { }
