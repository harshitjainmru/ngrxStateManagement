import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDatePickerComponent } from './common-date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';



@NgModule({
  declarations: [
    CommonDatePickerComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationModule
  ],
  exports:[CommonDatePickerComponent]
})
export class CommonDatePickerModule { }
