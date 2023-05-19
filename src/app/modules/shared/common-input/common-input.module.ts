import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInputComponent } from './common-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';
import { TrimDirectiveModule } from 'src/app/directives/trim-directive/trim-directive.module';
import { NumberOnlyModule } from 'src/app/directives/number-only/number-only.module';
import { InputMinMaxValueModule } from 'src/app/directives/input-min-max-value/input-min-max-value.module';
import { InstructionComponent } from 'src/app/components/instruction/instruction.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CommonInputComponent,
    InstructionComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationModule,
    TrimDirectiveModule,
    NumberOnlyModule,
    InputMinMaxValueModule,
    MatIconModule
  ],
  exports:[CommonInputComponent]
})
export class CommonInputModule { }
