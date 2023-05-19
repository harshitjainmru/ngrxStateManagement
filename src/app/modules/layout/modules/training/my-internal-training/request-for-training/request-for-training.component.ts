import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ABS_LAYOUT_REQUESTED_TRAININGS } from 'src/app/constants/absolute-routes';
import { validationMessage } from 'src/app/constants/error-messages';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { REQUEST_TRAINING_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';
import { getTrainingAction } from '../../trainingStore/training.action';

@Component({
  selector: 'app-request-for-training',
  templateUrl: './request-for-training.component.html',
  styleUrls: ['./request-for-training.component.scss'],
})
export class RequestForTrainingComponent implements OnInit {
  uiText = REQUEST_TRAINING_DATA;
  requestedForm!: FormGroup;
  errorMessage;
  @ViewChild(FormGroupDirective) formgroupdirective!: FormGroupDirective;

  constructor(
    private dialogRef: MatDialogRef<RequestForTrainingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formServcie: FormServiceService,
    private _notificationService: UtilityServiceService,
    private _store:Store,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage;
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  createForm() {
    this.requestedForm = this._formBuilder.group({
      training_name: this._formServcie.getControl('training_name'),
      team_name: this._formServcie.getControl('team_name'),
      skill_enhancement: this._formServcie.getControl('skill_enhancement'),
      skill_needed: this._formServcie.getControl('skill_needed'),
      interested: this._formServcie.getControl('interested'),
      timeline: this._formServcie.getControl(
        'timeline',
        true,
        this.uiText.immediateLabel
      ),
    });
  }
  noSpace(event: any) {
    if (event.target.selectionStart == 0 && event.code == 'Space') {
      event.preventDefault();
    }
  }
  get requestedFormControl() {
    return this.requestedForm.controls;

  }

  submit() {
    if (
      this.requestedFormControl['skill_needed'].value &&
      !this.requestedFormControl['interested'].value
    ) {
      this._notificationService.showError(MESSAGES.interested, '');
    }
    if (this.requestedForm.valid) {
      this._store.dispatch(getTrainingAction(this.requestedForm.value))
      this.formgroupdirective.resetForm();
      this._notificationService.showSuccess(MESSAGES.requestedForm, '');
      this.crossClick();
      this._router.navigate([ABS_LAYOUT_REQUESTED_TRAININGS.fullUrl])
    }
  }
}
