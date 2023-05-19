import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CONFIRMATION_LOGOUT_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-logout-confirmation',
  templateUrl: './logout-confirmation.component.html',
  styleUrls: ['./logout-confirmation.component.scss']
})
export class LogoutConfirmationComponent implements OnInit {
uiText
  constructor(
    private dialogRef: MatDialogRef<LogoutConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.uiText = this.data
  }

  onConfirmClick() {
    this.dialogRef.close('true');
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
}
