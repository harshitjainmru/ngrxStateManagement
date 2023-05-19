import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferlistComponent } from './referlist.component';

const routes: Routes = [
  {path:'',component:ReferlistComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferlistRoutingModule { }
