import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPitchComponent } from './my-pitch.component';

const routes: Routes = [
  {path:'',component:MyPitchComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPitchRoutingModule { }
