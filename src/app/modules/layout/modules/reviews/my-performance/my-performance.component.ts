import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MYPERFORMACE_VALUE } from 'src/app/constants/text';
import { DivisionRatingComponent } from '../division-rating/division-rating.component';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {
uiText =MYPERFORMACE_VALUE
currentData: any;
selectControl = new FormControl('');
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.currentData = this.uiText.reviewData[1];
    this.selectControl.setValue(this.uiText.reviewData[1].year);
  }

  onSelect() {
    const idx = this.uiText.reviewData.findIndex(
      (item) => item.year === this.selectControl.value
    );
    console.log(idx);
    this.currentData = this.uiText.reviewData[idx];
    console.log(this.currentData);

  }
  openDialog(item):void{
    console.log(item,'iuten');
    const dialogRef = this.dialog.open(DivisionRatingComponent, {
      // disableClose:true,
      data:item
    })
  }

}
