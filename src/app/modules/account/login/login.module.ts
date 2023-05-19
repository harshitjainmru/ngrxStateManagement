import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginWithCredentialsComponent } from './login-with-credentials/login-with-credentials.component';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { CommonPasswordInputModule } from '../../shared/common-password-input/common-password-input.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginWithCredentialsComponent,
    LoginWithGoogleComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AbsoluteRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CommonPasswordInputModule

  ],
})
export class LoginModule { }
