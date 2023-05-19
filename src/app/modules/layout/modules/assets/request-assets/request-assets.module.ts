import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetsRoutingModule } from './request-assets-routing.module';
import { RequestAssetsComponent } from './request-assets.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    RequestAssetsComponent
  ],
  imports: [
    CommonModule,
    RequestAssetsRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    DropDownModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class RequestAssetsModule { }
