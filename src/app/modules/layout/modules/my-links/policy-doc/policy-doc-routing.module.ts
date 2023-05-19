import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyDocComponent } from './policy-doc.component';

const routes: Routes = [
  {path:'',component:PolicyDocComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyDocRoutingModule { }
