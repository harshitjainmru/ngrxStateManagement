import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validationMessage } from 'src/app/constants/error-messages';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { EDUCATION_DROPDOWN, FORM_LABEL, LANGUAGE_DROPDOWN, UPDATE_DIALOG_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {
uiText = UPDATE_DIALOG_DATA
editForm!:FormGroup
errorMessage
updateData:any
constructor(
  private dialogRef: MatDialogRef<UpdateDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private _formBuilder:FormBuilder,
  private _formService:FormServiceService,
  private _notificationService:UtilityServiceService

  ) { }

  ngOnInit(): void {
    this.errorMessage = validationMessage
    this.createForm();
    console.log(this.data);
    this.editForm.patchValue(this.data)
  }
  createForm(){
    this.editForm = this._formBuilder.group({
      school: this._formService.getControl('school'),
      educationLevel: this._formService.getControl(
        'educationLevel',
      ),
      fromTime: this._formService.getControl('fromTime'),
      toTime: this._formService.getControl('toTime'),
      language: this._formService.getControl(
        'language',
      ),
      professionalCourses: this._formService.getControl('professionalCourses'),
      description: this._formService.getControl('description'),
    })
  }
  get editFormControl(){
    return this.editForm.controls;
  }
  save(){
    if(this.editFormControl['fromTime'].value > this.editFormControl['toTime'].value){
      this._notificationService.showError(MESSAGES.fromTimeGreaterValue,'')
    }else if(this.editForm.valid){
      this.dialogRef.close(this.editForm.value)
      this._notificationService.showSuccess(MESSAGES.qualification_info_update,'')
    }
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }
  crossClick(){
    this.dialogRef.close(false)
  }
}
