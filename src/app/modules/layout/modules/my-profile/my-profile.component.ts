import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { slideInRight } from 'src/animations/slideInRight';
import {
  LAYOUT_MY_PROFILE,
  LAYOUT_MY_PROFILE_USER_INFO,
} from 'src/app/constants/text';
import { getProfileImageSelector } from './profileStore/profile.selector';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  animations: [slideInRight],
})
export class MyProfileComponent implements OnInit {
  detailData: any = {
    routerLink: 'details',
  };
  uiMessage = LAYOUT_MY_PROFILE;
  userInfo = LAYOUT_MY_PROFILE_USER_INFO;
  image
  loader = false
  constructor(
    private _store:Store
  ) {}

  ngOnInit(): void {
    this._store.select(getProfileImageSelector).subscribe((res:any)=>{
      this.image = res.profile
      console.log(res,'res');

    })
    setTimeout(() => {
      // Simulate data retrieval after a delay
      this.loader = true
    }, 2000); // Delay of 2 seconds
  }

  changeTab(data: any) {
    this.detailData = data;
  }
  // isActive(item: any) {
  //   // return this.detailData === item ? item : null;
  //   if(this.detailData.routerLink==='details'){
  //     return this.detailData ===item ? item :null
  //   }else{
  //     return this.detailData === item ? item : null
  //   }

  // }
}
