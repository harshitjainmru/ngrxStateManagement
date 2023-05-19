import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelEnrollmentComponent } from './cancel-enrollment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CancelEnrollmentComponent

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CancelEnrollmentModule { }
