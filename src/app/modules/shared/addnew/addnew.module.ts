import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewComponent } from './addnew.component';
import { MatIconModule } from '@angular/material/icon';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropDownModule } from '../drop-down/drop-down.module';
import { MatInputModule } from '@angular/material/input';
import { CommonEditorModule } from '../common-editor/common-editor.module';



@NgModule({
  declarations: [
    AddnewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DropDownModule,
    CommonEditorModule
  ],
  providers:[{provide:TINYMCE_SCRIPT_SRC,useValue:'tinymce/tinymce.min.js'}],

  exports:[AddnewComponent]
})
export class AddnewModule { }
