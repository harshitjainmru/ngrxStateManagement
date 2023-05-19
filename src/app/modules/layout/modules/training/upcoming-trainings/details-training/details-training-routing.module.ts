import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTrainingComponent } from './details-training.component';

const routes: Routes = [
  {path:'',component:DetailsTrainingComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsTrainingRoutingModule { }
