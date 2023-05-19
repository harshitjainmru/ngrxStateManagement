import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MY_LEAVE__TABLE_DATA } from 'src/app/constants/tables';
import { LEAVE_DETAILS } from 'src/app/constants/text';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.scss']
})
export class LeaveDetailsComponent implements OnInit {
  detailId;
  trainingDetailData
  uiText = LEAVE_DETAILS
  level1StatusData
  constructor(
    private _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
    console.log(this.detailId,'detail');
    this.trainingDetailData= MY_LEAVE__TABLE_DATA.find(x => x.id ==this.detailId)
    console.log(this.trainingDetailData,'index')
    this.level1StatusData = this.trainingDetailData.level1.substr(0, 13)
    console.log(this.level1StatusData.substr(0, 13),'this');

  }

}
