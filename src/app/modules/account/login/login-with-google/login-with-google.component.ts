import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  GoogleAuthProvider,
} from '@angular/fire/auth';
import { ABS_LAYOUT_HOME } from 'src/app/constants/absolute-routes';
import { ACCOUNT } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
@Component({
  selector: 'app-login-with-google',
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.scss'],
})
export class LoginWithGoogleComponent implements OnInit {
  message = ACCOUNT;
  button_text = 'Login with credentials';

  constructor(
    private _title: Title,
    private fireauth: AngularFireAuth,
    private router: Router,
    private notificationService: UtilityServiceService,

  ) {
    this._title.setTitle(TITLE.login_title);
  }

  ngOnInit(): void {}
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'   // This will force the user to select their Google account every time they sign in, even if they have previously signed in with Google on the same device.
    });
    this.fireauth.signInWithPopup(provider).then((result) => {
      console.log(result);
      this.notificationService.showSuccess(MESSAGES.login_success,'')
      this.router.navigate([ABS_LAYOUT_HOME.fullUrl]);
      sessionStorage.setItem('token',Math.random().toString())
    }).catch((error) => {
      console.log(error);
      // alert(error.message);
    });
  }
}
