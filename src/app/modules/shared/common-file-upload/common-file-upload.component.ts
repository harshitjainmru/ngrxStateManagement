import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { validationMessage } from 'src/app/constants/error-messages';

@Component({
  selector: 'app-common-file-upload',
  templateUrl: './common-file-upload.component.html',
  styleUrls: ['./common-file-upload.component.scss']
})
export class CommonFileUploadComponent implements OnInit {
@Input() labelData;
@Input() alertData;
@Input() formName;
@Input() formcontrolname
@Input() labelStyle;
@Input() formFieldCSS;
@Input() accept;
@Input() assetDeclaration = false;

errorMessage
  constructor() { }

  ngOnInit(): void {this.errorMessage = validationMessage

  }

}
