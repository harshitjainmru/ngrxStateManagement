import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validationMessage } from 'src/app/constants/error-messages';
import { ADD_TAG_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-add-tag-dialog',
  templateUrl: './add-tag-dialog.component.html',
  styleUrls: ['./add-tag-dialog.component.scss']
})
export class AddTagDialogComponent implements OnInit {

  uiText = ADD_TAG_DATA
  addForm!:FormGroup
  errorMessage
  constructor(
    private dialogRef: MatDialogRef<AddTagDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder:FormBuilder,
    private _formService:FormServiceService
  ) { }

  ngOnInit(): void {
    this.makeForm();
    this.errorMessage = validationMessage
  }

  makeForm(){
    this.addForm = this._formBuilder.group({
      add_tag:this._formService.getControl('add_tag')
    })
  }

  submit(){
    if(this.addForm.valid){
      console.log(this.addForm.value,'addForm.value');
      this.dialogRef.close(this.addForm.value)
    }
  }
}
