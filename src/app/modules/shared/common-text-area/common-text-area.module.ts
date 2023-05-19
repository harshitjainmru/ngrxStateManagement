import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTextAreaComponent } from './common-text-area.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';



@NgModule({
  declarations: [
    CommonTextAreaComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationModule,
  ],
  exports:[CommonTextAreaComponent]
})
export class CommonTextAreaModule { }
