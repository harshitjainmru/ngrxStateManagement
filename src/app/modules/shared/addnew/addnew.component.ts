import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss']
})
export class AddnewComponent implements OnInit {
  // requestShow:boolean = false
  @Input() title;
  @Input() labelData;
  @Input() formControlname
  @Input() button;
  @Input() isSaved;
  @Output() buttonToggle : EventEmitter <any> = new EventEmitter();
  constructor(
     ) { }

  ngOnInit(): void {

  }
  showDiv(){

  }


}
