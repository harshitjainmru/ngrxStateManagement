import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsrDetailComponent } from './dsr-detail.component';

const routes: Routes = [
  {path:'',component:DsrDetailComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsrDetailRoutingModule { }
