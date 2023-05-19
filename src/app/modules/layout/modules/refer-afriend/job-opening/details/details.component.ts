import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RewardCondtionDialogComponent } from 'src/app/components/reward-condtion-dialog/reward-condtion-dialog.component';
import { JOB_DETAILS, JOB_DETAILS_DATA } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
detailId;
uiLabelText=JOB_DETAILS
detailData = JOB_DETAILS_DATA
indexwiseData;
  constructor(private _activatedRoute:ActivatedRoute,private dialog : MatDialog,private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle(TITLE.jobOpening_title)
    this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
    this.indexwiseData= this.detailData.find(x => x.id ==this.detailId)
    console.log(this.indexwiseData,'indexjob');

  }

  openDialog():void{
    const dialogRef = this.dialog.open(RewardCondtionDialogComponent, {
      disableClose:true,
    })
  }

}
