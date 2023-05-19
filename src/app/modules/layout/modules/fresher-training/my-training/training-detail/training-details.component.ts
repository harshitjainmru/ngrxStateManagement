import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { TITLE } from 'src/app/constants/title';
import { TrainingDataService } from 'src/app/services/training-data.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
  detailId
  trainingDetailData
  constructor(private _activatedRoute:ActivatedRoute,private title:Title,private data:TrainingDataService) { }

  ngOnInit(): void {
    this.title.setTitle(TITLE.training_details)
    this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
    console.log(this.detailId,'detail');
    this.trainingDetailData= this.data.headerValue.cardData.find(x => x.id ==this.detailId)
    console.log(this.trainingDetailData,'index')
  }
}
