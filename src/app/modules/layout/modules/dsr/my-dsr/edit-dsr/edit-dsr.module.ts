import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDSRRoutingModule } from './edit-dsr-routing.module';
import { EditDsrComponent } from './edit-dsr.component';
import { CommonEditorModule } from 'src/app/modules/shared/common-editor/common-editor.module';
import { CommonTimePickerModule } from 'src/app/modules/shared/common-time-picker/common-time-picker.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditDsrComponent
  ],
  imports: [
    CommonModule,
    EditDSRRoutingModule,
    CommonEditorModule,
    CommonTimePickerModule,
    CommonInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditDSRModule { }
