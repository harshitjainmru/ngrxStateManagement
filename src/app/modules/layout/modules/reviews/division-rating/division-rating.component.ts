import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MYPERFORMACE_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-division-rating',
  templateUrl: './division-rating.component.html',
  styleUrls: ['./division-rating.component.scss']
})
export class DivisionRatingComponent implements OnInit {
  uiText=MYPERFORMACE_VALUE
  constructor(
    private dialogRef: MatDialogRef<DivisionRatingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }


  onConfirmClick() {
    this.dialogRef.close(true);
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }


}
