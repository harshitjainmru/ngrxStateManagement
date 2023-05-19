import { Component, OnInit } from '@angular/core';
import { PROJECT_PLAN_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-common-component',
  templateUrl: './common-component.component.html',
  styleUrls: ['./common-component.component.scss']
})
export class CommonComponentComponent implements OnInit {
uiText = PROJECT_PLAN_DATA
panelOpenState = false
showExpansion = false
  constructor() { }

  ngOnInit(): void {
  }
  onClickShowExpansion(){
    this.showExpansion = !this.showExpansion
  }
}
