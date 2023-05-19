import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFileUploadComponent } from './common-file-upload.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    CommonFileUploadComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationModule
  ],
  exports:[CommonFileUploadComponent]
})
export class CommonFileUploadModule { }
