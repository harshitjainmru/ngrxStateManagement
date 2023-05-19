import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTrainingComponent } from './my-training.component';

const routes: Routes = [
  {path:'',component:MyTrainingComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTrainingRoutingModule { }
