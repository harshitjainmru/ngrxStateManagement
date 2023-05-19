import { Component, OnInit } from '@angular/core';

import { LAYOUT_HOME } from 'src/app/constants/text';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
uiMessage=LAYOUT_HOME
  constructor(

  ) { }

  ngOnInit(): void {
  }



}
