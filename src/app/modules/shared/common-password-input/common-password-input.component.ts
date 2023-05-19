import { Component, Input, OnInit } from '@angular/core';
import { validationMessage } from 'src/app/constants/error-messages';

@Component({
  selector: 'app-common-password-input',
  templateUrl: './common-password-input.component.html',
  styleUrls: ['./common-password-input.component.scss']
})
export class CommonPasswordInputComponent implements OnInit {
@Input() data;
@Input() formcontrolname;
@Input() appearanceType;
@Input() errorMessage;

// errorMessage
hide: boolean = true;
  constructor() {

  }

  ngOnInit(): void {
    // this.errorMessage=validationMessage
  }

}
