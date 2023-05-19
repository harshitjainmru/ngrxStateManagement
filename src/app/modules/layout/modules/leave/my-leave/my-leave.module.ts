import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLeaveRoutingModule } from './my-leave-routing.module';
import { MyLeaveComponent } from './my-leave.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { AddnewModule } from 'src/app/modules/shared/addnew/addnew.module';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';
import { CommonFileUploadModule } from 'src/app/modules/shared/common-file-upload/common-file-upload.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { CommonDatePickerModule } from 'src/app/modules/shared/common-date-picker/common-date-picker.module';
import { CommonEditorModule } from 'src/app/modules/shared/common-editor/common-editor.module';
import { RollbackLeaveComponent } from './rollback-leave/rollback-leave.component';
import { CommonTextAreaModule } from 'src/app/modules/shared/common-text-area/common-text-area.module';
@NgModule({
  declarations: [
    MyLeaveComponent,
    RollbackLeaveComponent
  ],
  imports: [
    CommonModule,
    MyLeaveRoutingModule,
    SharedModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    DropDownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    AddnewModule,
    ValidationModule,
    CommonFileUploadModule,
    CommonDatePickerModule,
    CommonEditorModule,
    CommonTextAreaModule
  ]
})
export class MyLeaveModule { }
