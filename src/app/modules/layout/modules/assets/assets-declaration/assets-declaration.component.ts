import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { InstructionComponent } from 'src/app/components/instruction/instruction.component';
import { validationMessage } from 'src/app/constants/error-messages';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { ASSET_DECLARATION_HEADING } from 'src/app/constants/tables';
import { DECLARATION_ASSETS_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-assets-declaration',
  templateUrl: './assets-declaration.component.html',
  styleUrls: ['./assets-declaration.component.scss'],
})
export class AssetsDeclarationComponent implements OnInit {
  uiText = DECLARATION_ASSETS_DATA;
  heading = ASSET_DECLARATION_HEADING;
  table_data = [];
  dataSource = new MatTableDataSource<any>();
  assetDeclarationForm!: FormGroup;
  errorMessage;
  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService,
    private _notificationService: UtilityServiceService,
    private dialog: MatDialog,
    private _elementRef:ElementRef
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.table_data);
    this.errorMessage = validationMessage;
    this.createForm();
    this.assetDeclarationFormControl['id'].setValue('AI1611');
    this.assetDeclarationFormControl['id'].disable();
  }
  showForm() {
    let content = this._elementRef.nativeElement.querySelector('.newRequest')
    console.log(content);
    if(content.style.maxHeight){
      content.style.maxHeight = null
    }else{
      content.style.maxHeight = 2 * content.scrollHeight + 'px'
    }
  }
  createForm() {
    this.assetDeclarationForm = this._formBuilder.group({
      id: this._formService.getControl('id'),
      code: this._formService.getControl('code'),
      serialnumber: this._formService.getControl('serialnumber'),
      modelnumber: this._formService.getControl('modelnumber'),
      os: this._formService.getControl('os'),
      osversion: this._formService.getControl('osversion'),
      brand: this._formService.getControl('brand'),
      color: this._formService.getControl('color'),
      workingcondition: this._formService.getControl('workingcondition'),
      assetimage: this._formService.getControl('assetimage'),
    });
  }
  get assetDeclarationFormControl() {
    return this.assetDeclarationForm.controls;
  }

  openDialogSerial() {
    const dialogRef = this.dialog.open(InstructionComponent, {
      data: {
        QUESTION_VALUE: 'How to Find Your Device Serial Number',
        BUTTON1: 'ios',
        BUTTON2: 'Android',
        linkios: 'https://www.youtube.com/watch?v=T6V8c0XP17Y',
        linkAndroid: 'https://www.youtube.com/watch?v=D2jSNpPkOCg',
      },
      panelClass: 'instruction',
      disableClose: true,
    });
  }
  openDialogModel() {
    const dialogRef = this.dialog.open(InstructionComponent, {
      data: {
        QUESTION_VALUE: 'How to Find Your Device Model Number',
        BUTTON1: 'ios',
        BUTTON2: 'Android',
        linkios: 'https://www.youtube.com/watch?v=ABdLR1qPZ5Y',
        linkAndroid: 'https://www.youtube.com/watch?v=BXMmKL2XQdI',
        panelClass: 'instruction',
        disableClose: true,
      },
    });
  }
  submit() {
    if (this.assetDeclarationForm.valid) {
      this.showForm();
      console.log(this.assetDeclarationForm.value);
      this._notificationService.showSuccess(MESSAGES.assetDeclaration, '');
    }
  }
}
