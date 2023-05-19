import { Component, OnInit } from '@angular/core';

import { slideInOut } from 'src/animations/slideInOut';
import { ACCOUNT } from 'src/app/constants/text';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [slideInOut]
})
export class AccountComponent implements OnInit {
copyRight = ACCOUNT.COPYRIGHT
googleLoginButton:boolean = false
  constructor(
  ) {
   }

  ngOnInit(): void {
  }

}
