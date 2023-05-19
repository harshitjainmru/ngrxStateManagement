import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchLogRoutingModule } from './punch-log-routing.module';
import { PunchLogComponent } from './punch-log.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PunchLogComponent
  ],
  imports: [
    CommonModule,
    PunchLogRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    DropDownModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PunchLogModule { }
