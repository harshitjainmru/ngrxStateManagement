import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ABS_LAYOUT_HOME } from 'src/app/constants/absolute-routes';
import { validationMessage } from 'src/app/constants/error-messages';
import { LAYOUT } from 'src/app/constants/routes';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { ACCOUNT } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from '../../../../services/utility/utility-service.service';

@Component({
  selector: 'app-login-with-credentials',
  templateUrl: './login-with-credentials.component.html',
  styleUrls: ['./login-with-credentials.component.scss']
})
export class LoginWithCredentialsComponent implements OnInit {

  loginMessage=ACCOUNT
  errorMessage: any;
  display: boolean = true;
  hide: boolean = true;
  loginForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private notificationService: UtilityServiceService,
    private _formService:FormServiceService,
    private _router: Router,
  ) {

  }

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage;
  }

  createForm() {
    this.loginForm = this._formBuilder.group({
      email:this._formService.getControl('email'),
      password:this._formService.getControl('password')
    });
  }
  get formControl() {
    return this.loginForm.controls;
  }

  showMessage() {
  this.notificationService.showSuccess(MESSAGES.login_success, '')
  }

  loginHandler() {
    this.formControl['email'].patchValue(
      this.formControl['email'].value?.trim().toLowerCase()
    );
    if (this.loginForm.valid) {
      this.showMessage()
      // localStorage.setItem('token',Math.random().toString())
      sessionStorage.setItem('token',Math.random().toString())

     this._router.navigate([ABS_LAYOUT_HOME.fullUrl])
    }
  }
}
