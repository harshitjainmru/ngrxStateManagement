import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { CommonEditorModule } from 'src/app/modules/shared/common-editor/common-editor.module';
import { CommonFileUploadModule } from 'src/app/modules/shared/common-file-upload/common-file-upload.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';

@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DropDownModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    AbsoluteRoutingModule,
    CommonEditorModule,
    CommonFileUploadModule,
    CommonInputModule
  ]
})
export class ExploreModule { }
