import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LIMIT } from 'src/app/constants/limit';
import { PATTERN } from 'src/app/constants/pattern';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { REFER_A_CANDIDATE_DIALOG } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-refer-acandidate',
  templateUrl: './refer-acandidate.component.html',
  styleUrls: ['./refer-acandidate.component.scss'],
})
export class ReferACandidateComponent implements OnInit {
  uiText = REFER_A_CANDIDATE_DIALOG;
  disableValue: boolean = true;
 public referCandidateForm!: FormGroup;
  maxLength = 200;
  constructor(
    private dialogRef: MatDialogRef<ReferACandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private formService: FormServiceService,
    private _notificationService: UtilityServiceService
  ) {}

  ngOnInit(): void {
    console.log(this.data, 'bliiimp');
    this.createForm();
    this.setValue();
    this.setValueDisabled();
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  createForm() {
    this.referCandidateForm = this._formBuilder.group({
      department_name: ['', [Validators.required]],
      job_code: ['', [Validators.required]],
      location: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      // job_location: [this.uiText.location_data[0],],
      job_location: [null],
      candidate_name: ['', [Validators.required,Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length),Validators.pattern(PATTERN.FIRST_NAME)]],
      position_title: [this.data.position_title, [Validators.required]],
      experience_candidate: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(PATTERN.EMAIL_PATTERN),
          Validators.email,
          Validators.maxLength(LIMIT.MAX_EMAIL_LENGTH),
        ],
      ],
      contact: [
        '',
        [Validators.required, Validators.pattern(PATTERN.PHONE_NUMBER)],
      ],
      upload: ['', [Validators.required]],
      skill: [
        '',
        [Validators.required, Validators.minLength(LIMIT.min_missing_textbox)],
      ],
    });
  }
  get referCandidateControl() {
    return this.referCandidateForm.controls;
  }
  setValue() {
    this.referCandidateForm
      .get('department_name')
      .setValue(this.data.DEPARTMENT_VALUE);
    this.referCandidateForm.get('job_code').setValue(this.data.JOB_CODE);
    this.referCandidateForm.get('location')?.setValue(this.data.LOCATION);
    this.referCandidateForm
      .get('experience')
      ?.setValue(this.data.EXPERIENCE_NUMBER);
    this.referCandidateForm
      .get('job_location')
      ?.setValue(this.uiText.location_data[0], { onlySelf: true });
  }
  setValueDisabled() {
    this.referCandidateForm.get('department_name').disable();
    this.referCandidateForm.get('job_code').disable();
    this.referCandidateForm.get('location').disable();
    this.referCandidateForm.get('experience').disable();
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }
  Submit() {
    this.referCandidateControl['skill'].patchValue(
      this.referCandidateControl['skill'].value?.trim().toLowerCase()
    );
    if (this.referCandidateControl['job_location'].value == 'Select Location') {
      this._notificationService.showError(MESSAGES.select_location, '');
    } else {
      if (this.referCandidateForm.valid) {
        console.log(this.referCandidateForm.value);
        this._notificationService.showSuccess(MESSAGES.referCandidate,'')
        this.crossClick();
      }
    }
  }
}
