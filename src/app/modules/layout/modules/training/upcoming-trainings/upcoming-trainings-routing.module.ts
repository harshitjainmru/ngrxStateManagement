import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingTrainingsComponent } from './upcoming-trainings.component';

const routes: Routes = [
  {path:'',component:UpcomingTrainingsComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingTrainingsRoutingModule { }
