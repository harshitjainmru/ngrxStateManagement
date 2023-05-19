import { Component, OnInit } from '@angular/core';
import { REFERRAL, REFERRAL_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-referral-bonus',
  templateUrl: './referral-bonus.component.html',
  styleUrls: ['./referral-bonus.component.scss']
})
export class ReferralBonusComponent implements OnInit {
uiMessage=REFERRAL
uiReferralData = REFERRAL_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
