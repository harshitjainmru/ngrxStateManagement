import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Covid19Component } from 'src/app/components/covid19/covid19.component';
import { LAYOUT } from 'src/app/constants/text';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
uiMessage=LAYOUT
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog():void{

    const dialogRef = this.dialog.open(Covid19Component, {
      // disableClose:true,
    })
  }

}
