import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_PROJECT, ABS_LAYOUT_PROJECT_DETAILS} from 'src/app/constants/absolute-routes';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {path:'',component:ProjectComponent,children:[
    {
      path: `${ABS_LAYOUT_PROJECT_DETAILS.path}/:id`,
      loadChildren: () =>
        import('./project-detail/project-detail.module').then((m) => m.ProjectDetailModule),
    },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
