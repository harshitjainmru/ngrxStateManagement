import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { REQUESTED_TRAINING_HEADING } from 'src/app/constants/tables';
import { TITLE } from 'src/app/constants/title';
import { getTrainingSelector } from '../trainingStore/training.selector';

@Component({
  selector: 'app-requested-trainings',
  templateUrl: './requested-trainings.component.html',
  styleUrls: ['./requested-trainings.component.scss']
})
export class RequestedTrainingsComponent implements OnInit {
headerValue = TITLE.requested_trainings
tableHeading = REQUESTED_TRAINING_HEADING
dataSource = new MatTableDataSource<any>();
table_data
  constructor(private title:Title,private _store:Store) { }

  ngOnInit(): void {
    this.title.setTitle(this.headerValue)
    this._store.select(getTrainingSelector).subscribe((data:any)=>{
      console.log(data,'requested');
      this.dataSource = new MatTableDataSource<any>(data);

    })
  }


}
