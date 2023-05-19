import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonEditorComponent } from './common-editor.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TrimDirectiveModule } from 'src/app/directives/trim-directive/trim-directive.module';



@NgModule({
  declarations: [
    CommonEditorComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TrimDirectiveModule
  ],
  providers:[{provide:TINYMCE_SCRIPT_SRC,useValue:'tinymce/tinymce.min.js'}],
    exports:[
    CommonEditorComponent

    ]
})
export class CommonEditorModule { }
