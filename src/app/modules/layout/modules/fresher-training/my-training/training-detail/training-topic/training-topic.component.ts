import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TRAINING_DETAILS } from 'src/app/constants/text';

@Component({
  selector: 'app-training-topic',
  templateUrl: './training-topic.component.html',
  styleUrls: ['./training-topic.component.scss']
})
export class TrainingTopicComponent implements OnInit {
uiText
detailId
detailData =TRAINING_DETAILS
dataSource = new MatTableDataSource<any>();

constructor(private _activatedRoute:ActivatedRoute) {
  this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
  this.uiText= this.detailData.find(x => x.id ==this.detailId)


}

ngOnInit(): void {
  this.dataSource = new MatTableDataSource<any>(this.uiText.table_data);

}
}
