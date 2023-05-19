import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_FLOATING_LEAVE, ABS_LAYOUT_LEAVE, ABS_LAYOUT_LEAVE_DETAILS } from 'src/app/constants/absolute-routes';
import { LeaveComponent } from './leave.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveComponent,
    children: [
      {
        path: ABS_LAYOUT_LEAVE.path,
        loadChildren: () =>
          import('./my-leave/my-leave.module').then((m) => m.MyLeaveModule),
      },
      {
        path: `${ABS_LAYOUT_LEAVE_DETAILS.path}/:id`,
        loadChildren: () =>
          import('./my-leave/leave-details/leave-details.module').then((m) => m.LeaveDetailsModule),
      },
      {
        path: ABS_LAYOUT_FLOATING_LEAVE.path,
        loadChildren: () =>
          import('./floating-leave/floating-leave.module').then((m) => m.FloatingLeaveModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRoutingModule {}
