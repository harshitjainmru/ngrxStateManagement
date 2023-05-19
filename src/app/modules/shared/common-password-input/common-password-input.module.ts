import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPasswordInputComponent } from './common-password-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommonPasswordInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[CommonPasswordInputComponent]
})
export class CommonPasswordInputModule { }
