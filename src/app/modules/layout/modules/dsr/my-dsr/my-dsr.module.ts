import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDsrRoutingModule } from './my-dsr-routing.module';
import { MyDsrComponent } from './my-dsr.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonTimePickerModule } from 'src/app/modules/shared/common-time-picker/common-time-picker.module';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';
import { CommonDatePickerModule } from 'src/app/modules/shared/common-date-picker/common-date-picker.module';
import { MatIconModule } from '@angular/material/icon';
import { CommonEditorModule } from 'src/app/modules/shared/common-editor/common-editor.module';

@NgModule({
  declarations: [
    MyDsrComponent
  ],
  imports: [
    CommonModule,
    MyDsrRoutingModule,
    SharedModule,
    MatCheckboxModule,
    DropDownModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    CommonTimePickerModule,
    CommonDatePickerModule,
    ValidationModule,
    MatIconModule,
    CommonEditorModule
  ]
})
export class MyDsrModule { }
