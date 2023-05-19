import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { CommonEditorModule } from 'src/app/modules/shared/common-editor/common-editor.module';


@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DropDownModule,
    SharedModule,
    ValidationModule,
    CommonInputModule,
    CommonEditorModule
  ]
})
export class TicketModule { }
