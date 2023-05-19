import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareYourIdeaComponent } from './share-your-idea.component';

const routes: Routes = [
  {path:'',component:ShareYourIdeaComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareYourIdeaRoutingModule { }
