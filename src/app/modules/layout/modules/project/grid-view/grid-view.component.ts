import { Component, OnInit } from '@angular/core';
import { GRID_VIEW_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
uiText = GRID_VIEW_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
