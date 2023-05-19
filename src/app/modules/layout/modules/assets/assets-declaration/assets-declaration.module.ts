import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsDeclarationRoutingModule } from './assets-declaration-routing.module';
import { AssetsDeclarationComponent } from './assets-declaration.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { CommonFileUploadModule } from 'src/app/modules/shared/common-file-upload/common-file-upload.module';


@NgModule({
  declarations: [
    AssetsDeclarationComponent
  ],
  imports: [
    CommonModule,
    AssetsDeclarationRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    DropDownModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    CommonInputModule,
    CommonFileUploadModule
  ]
})
export class AssetsDeclarationModule { }
