import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmountDueComponent } from './amount-due.component';
import { NoteModule } from '../note/note.module';



@NgModule({
  declarations: [AmountDueComponent],
  imports: [
    CommonModule,
    NoteModule
  ],
  exports:[AmountDueComponent]
})
export class AmountDueModule { }
