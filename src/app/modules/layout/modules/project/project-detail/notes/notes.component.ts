import { Component, OnInit } from '@angular/core';
import { NOTE_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
uiText = NOTE_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
