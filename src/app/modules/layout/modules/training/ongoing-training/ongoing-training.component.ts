import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ONGOING_TRAININGS_DATA } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-ongoing-training',
  templateUrl: './ongoing-training.component.html',
  styleUrls: ['./ongoing-training.component.scss']
})
export class OngoingTrainingComponent implements OnInit {
uiText = ONGOING_TRAININGS_DATA
  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle(TITLE.ongoing_trainings)
  }

}
