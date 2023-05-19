import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_ASSETS_DECLARATION, ABS_LAYOUT_ASSETS_INVENTROY, ABS_LAYOUT_ASSETS_REQUESTS } from 'src/app/constants/absolute-routes';
import { AssetsComponent } from './assets.component';

const routes: Routes = [
  {path:'',component:AssetsComponent,children:[
    {
      path:ABS_LAYOUT_ASSETS_INVENTROY.path,
      loadChildren:() =>
      import('./assets-inventory/assets-inventory.module').then((m)=>m.AssetsInventoryModule)
    },
    {
      path:ABS_LAYOUT_ASSETS_REQUESTS.path,
      loadChildren:() =>
      import('./request-assets/request-assets.module').then((m)=>m.RequestAssetsModule)
    },
    {
      path:ABS_LAYOUT_ASSETS_DECLARATION.path,
      loadChildren:() =>
      import('./assets-declaration/assets-declaration.module').then((m)=>m.AssetsDeclarationModule)
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
