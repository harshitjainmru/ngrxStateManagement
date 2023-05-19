import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { slideInRight } from 'src/animations/slideInRight';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { DEPARTMENT_CHANGE } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-department-change',
  templateUrl: './department-change.component.html',
  styleUrls: ['./department-change.component.scss'],
  animations: [slideInRight],
})
export class DepartmentChangeComponent implements OnInit {
  uiMessage = DEPARTMENT_CHANGE;
  departmentForm!: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private _fb: FormBuilder,
    private _formService: FormServiceService,
    private _notificationService: UtilityServiceService
  ) {}

  ngOnInit(): void {
    this.makeForm();
  }
  makeForm() {
    this.departmentForm = this._fb.group({
      department: this._formService.getControl('editor', true, 'Angular'),
      changeTo: this._formService.getControl('educationLevel'),
      requestReason: this._formService.getControl('skill_enhancement'),
    });
  }
  get departmentFormControl() {
    return this.departmentForm.controls;
  }

  submitHandler() {
    if (this.departmentForm.valid) {
      console.log(this.departmentForm.value);
      this._notificationService.showSuccess(MESSAGES.changeDepartment, '');
      this.formGroupDirective.resetForm();
      this.makeForm();
    }
  }
}
