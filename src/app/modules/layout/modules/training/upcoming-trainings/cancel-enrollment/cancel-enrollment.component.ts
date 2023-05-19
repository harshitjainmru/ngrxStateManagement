import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validationMessage } from 'src/app/constants/error-messages';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { CANCEL_ENROLLMENT_DIALOG_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-cancel-enrollment',
  templateUrl: './cancel-enrollment.component.html',
  styleUrls: ['./cancel-enrollment.component.scss'],
})
export class CancelEnrollmentComponent implements OnInit {
  cancelEnrollmentForm!: FormGroup;
  maxLength = 500;
  uiText = CANCEL_ENROLLMENT_DIALOG_DATA;
  errorMessage;
@ViewChild(FormGroupDirective) formgroupdirective!:FormGroupDirective

  constructor(
    private dialogRef: MatDialogRef<CancelEnrollmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService,
    private _utilityService:UtilityServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage;
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  createForm() {
    this.cancelEnrollmentForm = this._formBuilder.group({
      briefReason: this._formService.getControl('briefReason'),
    });
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }
  submit(){
    if(this.cancelEnrollmentForm.controls['briefReason'].hasError('required')){
      this._utilityService.showError('Brief Reason field is required','')
    }else if(this.cancelEnrollmentForm.controls['briefReason'].hasError('minlength')){
      this._utilityService.showError('Reason requires atleast 25 characters','')
    }
    if(this.cancelEnrollmentForm.valid){
      this._utilityService.showSuccess(MESSAGES.cancelEnrollment,'')
      this.formgroupdirective.resetForm();
      this.crossClick();
    }
  }
}
