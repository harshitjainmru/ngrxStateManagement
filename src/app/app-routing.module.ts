import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ABS_ACCOUNT_LOGIN, ABS_LAYOUT, ACCOUNT,
} from './constants/absolute-routes';
import { AuthGuard } from './guards/auth/auth.guard';
import { DeactivateGuard } from './guards/deactivate/deactivate.guard';
import { HomeGuard } from './guards/home/home.guard';

const routes: Routes = [
  { path: '', redirectTo: ACCOUNT.fullUrl, pathMatch: 'full' },
  {
    path: ACCOUNT.fullUrl,
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
      canActivate:[AuthGuard]
    },
    {
      path: ABS_LAYOUT.fullUrl,
      loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
      canActivate:[HomeGuard],
      // canDeactivate:[DeactivateGuard],
  },
  // { path: '**', redirectTo:ABS_ACCOUNT_LOGIN.fullUrl , pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
