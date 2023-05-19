import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestDinnerRoutingModule } from './request-dinner-routing.module';
import { RequestDinnerComponent } from './request-dinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonEditorModule } from 'src/app/modules/shared/common-editor/common-editor.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';


@NgModule({
  declarations: [
    RequestDinnerComponent
  ],
  imports: [
    CommonModule,
    RequestDinnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonInputModule,
    CommonEditorModule,
    DropDownModule
  ]
})
export class RequestDinnerModule { }
