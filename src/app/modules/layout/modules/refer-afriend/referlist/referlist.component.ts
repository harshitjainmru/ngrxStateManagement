import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ABS_LAYOUT_JOB_OPENING } from 'src/app/constants/absolute-routes';
import { REFER_LIST_VALUE } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-referlist',
  templateUrl: './referlist.component.html',
  styleUrls: ['./referlist.component.scss']
})
export class ReferlistComponent implements OnInit {
uiText = REFER_LIST_VALUE
  constructor(private _title :Title, private _route:Router) { }

  ngOnInit(): void {
    this._title.setTitle(TITLE.candidate_referral_title)
  }
  routeToJobOpening(){
    this._route.navigate([ABS_LAYOUT_JOB_OPENING.fullUrl])
  }

}
