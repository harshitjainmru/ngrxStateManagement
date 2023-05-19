import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_ATTENDANCE_CALENDAR, ABS_LAYOUT_MANUAL_PUNCH, ABS_LAYOUT_PUNCH_LOG } from 'src/app/constants/absolute-routes';
import { AttendanceComponent } from './attendance.component';

const routes: Routes = [
  {path:'',component:AttendanceComponent,children:[
    {
      path:ABS_LAYOUT_ATTENDANCE_CALENDAR.path,
      loadChildren:() =>
      import('./attendance-calendar/attendance-calendar.module').then((m)=>m.AttendanceCalendarModule)
    },
    {
      path:ABS_LAYOUT_MANUAL_PUNCH.path,
      loadChildren:() =>
      import('./manual-punch/manual-punch.module').then((m)=>m.ManualPunchModule)
    },
    {
      path:ABS_LAYOUT_PUNCH_LOG.path,
      loadChildren:() =>
      import('./punch-log/punch-log.module').then((m)=>m.PunchLogModule)
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
