import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { slideInOut } from 'src/animations/slideInOut';
import { ABS_ACCOUNT_LOGIN } from 'src/app/constants/absolute-routes';
import { validationMessage } from 'src/app/constants/error-messages';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { ACCOUNT } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations:[slideInOut]
})
export class ForgotPasswordComponent implements OnInit {
uiMessage=ACCOUNT
forgotForm!:FormGroup
errorMessage:any
  constructor(
    private _formBuilder:FormBuilder,
    private _formService:FormServiceService,
    private _title:Title,
    private _nottificationService:UtilityServiceService,
    private _router:Router

  ) {
    this._title.setTitle(TITLE.forgot_title)
  }

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage;

  }
  createForm(){
    this.forgotForm = this._formBuilder.group({
      email: this._formService.getControl('email'),
    })
  }
  get formControl(){
    return this.forgotForm.controls
  }
  forgotHandler(){
    this.formControl['email'].patchValue(
      this.formControl['email'].value?.trim().toLowerCase()
    );
    if(this.forgotForm.valid){
      this._nottificationService.showSuccess(MESSAGES.recover_message,'')
      this._router.navigate([ABS_ACCOUNT_LOGIN])
      // setTimeout(() => {
      // }, 1000);
    }
  }
}
