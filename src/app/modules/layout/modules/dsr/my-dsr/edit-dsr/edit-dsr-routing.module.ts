import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDsrComponent } from './edit-dsr.component';

const routes: Routes = [
  {path:'',component:EditDsrComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDSRRoutingModule { }
