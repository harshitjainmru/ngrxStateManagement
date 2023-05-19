import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FORGOT_PASSWORD, LOGIN } from 'src/app/constants/routes';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: LOGIN, pathMatch: 'full' },
      {
        path: LOGIN,
        loadChildren: () =>
          import('./login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: FORGOT_PASSWORD,
        loadChildren: () =>
          import('./forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
