import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss']
})
export class CommonInputComponent implements OnInit {
  @Input() data;
  @Input() data2;
  @Input() myControlName;
  @Input() min;
  @Input() max;
  @Input() type;
  @Input() labelStyle;
  @Input() formFieldCSS;
  @Input() readonly = false
  @Input() assetDeclaration = false
  @Output() instruction = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  showInstruction(data){
    console.log(data,'hii');

    this.instruction.emit(data);
  }

}
