import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ABS_ACCOUNT_LOGIN } from 'src/app/constants/absolute-routes';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

routeToLogin(){
  this._route.navigate([ABS_ACCOUNT_LOGIN.fullUrl])
}
}
