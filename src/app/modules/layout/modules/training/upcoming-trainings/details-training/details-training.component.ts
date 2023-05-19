import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TRAINING_DETAILS_UPCOMING } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-details-training',
  templateUrl: './details-training.component.html',
  styleUrls: ['./details-training.component.scss']
})
export class DetailsTrainingComponent implements OnInit {
  uiText
  detailId;
  detailData = TRAINING_DETAILS_UPCOMING
    constructor(private _activatedRoute:ActivatedRoute,private title:Title) { }

    ngOnInit(): void {
      this.title.setTitle(TITLE.training_details)
      this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
      this.uiText= this.detailData.find(x => x.id ==this.detailId)
      console.log(this.uiText,'indexjob');

    }

}
