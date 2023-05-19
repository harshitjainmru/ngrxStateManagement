import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualPunchRoutingModule } from './manual-punch-routing.module';
import { ManualPunchComponent } from './manual-punch.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';


@NgModule({
  declarations: [
    ManualPunchComponent
  ],
  imports: [
    CommonModule,
    ManualPunchRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    DropDownModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CommonInputModule
  ]
})
export class ManualPunchModule { }
