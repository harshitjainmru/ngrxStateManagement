import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ABS_LAYOUT_EXPLORE } from 'src/app/constants/absolute-routes';
import { ENTREPRENEURSHIP_VALUE, LIST_DATA1, LIST_DATA2 } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-share-your-idea',
  templateUrl: './share-your-idea.component.html',
  styleUrls: ['./share-your-idea.component.scss']
})
export class ShareYourIdeaComponent implements OnInit {
  uimessage = ENTREPRENEURSHIP_VALUE
  list1Data = LIST_DATA1
  list2Data = LIST_DATA2


    constructor(private _title:Title,private _route:Router) {

    }

    ngOnInit(): void {
      this._title.setTitle(TITLE.entreprenurship_title)
    }
    routeToAddPitch(){
      this._route.navigate([ABS_LAYOUT_EXPLORE.fullUrl])
    }

}
