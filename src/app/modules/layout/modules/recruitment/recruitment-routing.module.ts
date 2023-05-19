import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_INTERVIEW_LIST } from 'src/app/constants/absolute-routes';
import { RecruitmentComponent } from './recruitment.component';

const routes: Routes = [
  {path:'',component:RecruitmentComponent,children:[
    {
      path:ABS_LAYOUT_INTERVIEW_LIST.path,
      loadChildren:() =>
      import('./my-interview/my-interview.module').then((m)=>m.MyInterviewModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule { }
