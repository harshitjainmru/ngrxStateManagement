import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestDinnerComponent } from './request-dinner.component';

const routes: Routes = [
  {path:'',component:RequestDinnerComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestDinnerRoutingModule { }
