import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AMOUNT_DUE } from 'src/app/constants/text';

@Component({
  selector: 'app-amount-due',
  templateUrl: './amount-due.component.html',
  styleUrls: ['./amount-due.component.scss']
})
export class AmountDueComponent implements OnInit {
uiText = AMOUNT_DUE
@Input() showButton:boolean = true
@Input() value
@Input() couponAvailable : any
@Output() view = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
viewTable(){
  this.view.emit('');
}
}
