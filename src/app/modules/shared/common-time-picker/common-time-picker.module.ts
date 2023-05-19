import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTimePickerComponent } from './common-time-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';



@NgModule({
  declarations: [
    CommonTimePickerComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatTimepickerModule.setLocale('en-GB'),
    ValidationModule
  ],
  exports:[CommonTimePickerComponent]
})
export class CommonTimePickerModule { }
