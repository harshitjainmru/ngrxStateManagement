import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  uiText
  constructor(
    private dialogRef: MatDialogRef<InstructionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.uiText = this.data
  }

  onConfirmClick() {
    this.dialogRef.close('ios');
  }
  onConfirmAndroid() {
    this.dialogRef.close('android');
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }

}
