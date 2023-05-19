import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_DSR, ABS_LAYOUT_DSR_DETAIL, ABS_LAYOUT_DSR_EDIT } from 'src/app/constants/absolute-routes';
import { DsrComponent } from './dsr.component';

const routes: Routes = [
  {path:'',component:DsrComponent,children:[
    {
      path: ABS_LAYOUT_DSR.path,
      loadChildren: () =>
        import('./my-dsr/my-dsr.module').then((m) => m.MyDsrModule),
    },
    {
      path: `${ABS_LAYOUT_DSR_DETAIL.path}/:id`,
      loadChildren: () =>
        import('./my-dsr/dsr-detail/dsr-detail.module').then((m) => m.DsrDetailModule),
    },
    {
      path: `${ABS_LAYOUT_DSR_EDIT.path}/:id`,
      loadChildren: () =>
        import('./my-dsr/edit-dsr/edit-dsr.module').then((m) => m.EditDSRModule),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsrRoutingModule { }
