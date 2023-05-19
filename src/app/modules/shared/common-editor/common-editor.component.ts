import { Component, Input, OnInit } from '@angular/core';

declare const tinymce: any;
@Component({
  selector: 'app-common-editor',
  templateUrl: './common-editor.component.html',
  styleUrls: ['./common-editor.component.scss']
})
export class CommonEditorComponent implements OnInit {
  @Input() labelData;
  @Input() formControlname
  @Input() labelStyle
  constructor() {
this.preload();
   }

  ngOnInit(): void {
  }
  preload() {
    if (typeof tinymce !== 'undefined') {
      return Promise.resolve();
    }

    // const script = document.createElement('script');
    // script.src = 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js';
    // document.body.appendChild(script);

    return new Promise(resolve => {
      // script.onload = resolve;
    });
  }
}
