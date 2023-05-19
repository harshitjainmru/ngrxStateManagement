import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validationMessage } from 'src/app/constants/error-messages';
import { LIMIT } from 'src/app/constants/limit';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { FEEDBACK_fORM_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  uiText = FEEDBACK_fORM_DATA;
  feedbackForm!: FormGroup;
  errorMessage;
  constructor(
    private dialogRef: MatDialogRef<FeedbackFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private formService: FormServiceService,
    private uitlity: UtilityServiceService
  ) {}

  ngOnInit(): void {
    this.errorMessage = validationMessage;
    this.createForm();
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }
  createForm() {
    this.feedbackForm = this._formBuilder.group({
      goalTraining: this.formService.getControl('goalTraining'),
      missingDescription: [''],
      relevantFeedback: this.formService.getControl('relevantFeedback'),
      overallFeedback: this.formService.getControl('overallFeedback'),
      satisfiedWithContent: this.formService.getControl('satisfiedWithContent'),
      overallTrainingDescription: this.formService.getControl(
        'overallTrainingDescription'
      ),
    });
  }

  get feedbackFormControl() {
    return this.feedbackForm.controls;
  }
  onFeedbackDetail() {
    let optionSelected = this.feedbackFormControl['goalTraining'].value;
    if (optionSelected === 'no') {
      this.feedbackFormControl['missingDescription'].setValidators([
        Validators.required,
        Validators.minLength(LIMIT.max_missing_textbox),
      ]);
      this.feedbackFormControl['missingDescription'].updateValueAndValidity();
    } else {
      this.feedbackFormControl['missingDescription'].clearValidators();
      this.feedbackFormControl['missingDescription'].updateValueAndValidity();
    }
  }
  // snackbarError() {
  //   if (this.feedbackForm.controls['goalTraining'].hasError('required')) {
  //     this.uitlity.showError('Objective/goal rating is required', '');
  //   } else if (
  //     this.feedbackForm.controls['relevantFeedback'].hasError('required')
  //   ) {
  //     this.uitlity.showError('Relevant rating is required', '');
  //   } else if (
  //     this.feedbackForm.controls['overallFeedback'].hasError('required')
  //   ) {
  //     this.uitlity.showError('Overall rating is required', '');
  //   } else if (
  //     this.feedbackForm.controls['satisfiedWithContent'].hasError('required')
  //   ) {
  //     this.uitlity.showError('Satisfied rating is required', '');
  //   } else if (
  //     this.feedbackForm.controls['overallTrainingDescription'].hasError(
  //       'required'
  //     )
  //   ) {
  //     this.uitlity.showError('Overall feeback field  is required', '');
  //   } else if (
  //     this.feedbackForm.controls['overallTrainingDescription'].hasError(
  //       'minlength'
  //     )
  //   ) {
  //     {
  //       this.uitlity.showError(
  //         '"What is missing" textbox requires atleast 25 characters',
  //         ''
  //       );
  //     }
  //   }
  //   if (this.feedbackForm.controls['goalTraining'].value == 'no') {
  //     if (
  //       this.feedbackForm.controls['missingDescription'].hasError('required')
  //     ) {
  //       this.uitlity.showError('"What is missing" field is required', '');
  //     } else if (
  //       this.feedbackForm.controls['missingDescription'].hasError('minlength')
  //     ) {
  //       {
  //         this.uitlity.showError(
  //           '"What is missing" textbox requires atleast 25 characters',
  //           ''
  //         );
  //       }
  //     }
  //   }
  // }
  snackbarError() {
    switch (true) {
      case this.feedbackForm.controls['goalTraining'].hasError('required'):
        this.uitlity.showError('Objective/goal rating is required', '');
        break;
      case this.feedbackForm.controls['relevantFeedback'].hasError('required'):
        this.uitlity.showError('Relevant rating is required', '');
        break;
      case this.feedbackForm.controls['overallFeedback'].hasError('required'):
        this.uitlity.showError('Overall rating is required', '');
        break;
      case this.feedbackForm.controls['satisfiedWithContent'].hasError('required'):
        this.uitlity.showError('Satisfied rating is required', '');
        break;
      case this.feedbackForm.controls['overallTrainingDescription'].hasError('required'):
        this.uitlity.showError('Overall feedback field is required', '');
        break;
      case this.feedbackForm.controls['overallTrainingDescription'].hasError('minlength'):
      case this.feedbackForm.controls['missingDescription'].hasError('minlength'):
        this.uitlity.showError('"What is missing" textbox requires at least 25 characters', '');
        break;
      case this.feedbackForm.controls['goalTraining'].value === 'no':
        if (this.feedbackForm.controls['missingDescription'].hasError('required')) {
          this.uitlity.showError('"What is missing" field is required', '');
        }
        break;
      case this.feedbackForm.controls['missingDescription'].hasError('required'):
        this.uitlity.showError('"What is missing" field is required', '');
        break;
      default:
        break;
    }

  }

  submit() {
    if (this.feedbackForm.valid) {
      this.uitlity.showSuccess(MESSAGES.feedback_success, '');
      this.dialogRef.close(this.feedbackForm.value);
    } else {
      this.snackbarError();
    }
  }
}
