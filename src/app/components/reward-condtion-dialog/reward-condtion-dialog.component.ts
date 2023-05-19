import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CONDITION_REWARD_DIALOG_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-reward-condtion-dialog',
  templateUrl: './reward-condtion-dialog.component.html',
  styleUrls: ['./reward-condtion-dialog.component.scss']
})
export class RewardCondtionDialogComponent implements OnInit {
  uiText=CONDITION_REWARD_DIALOG_VALUE
  constructor(
    private dialogRef: MatDialogRef<RewardCondtionDialogComponent>,
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
