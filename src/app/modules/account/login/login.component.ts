import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ACCOUNT } from 'src/app/constants/text';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginWithGoogle:boolean = true
  message=ACCOUNT

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
