import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sideNavList } from 'src/app/constants/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() isExpanded!: boolean;
  @Input() isShowing!: boolean;
  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  sidenav=sideNavList
  constructor() {}

  ngOnInit(): void {
  }


  expand() {
    this.stateChange.emit(this.isExpanded);
  }

  submenu(data:any){
    this.sidenav.map((navBarItem:any)=>{
      if(navBarItem.title != data.title){
        navBarItem.subMenuClicked = false;
      }
    })
    data.subMenuClicked = !data.subMenuClicked;
    console.log(this.sidenav,'submenu',data);
  }

  // submenu(data: any) {
  //   // Find the previous parent sidenav and remove its color
  //   const prevParent = this.sidenav.find(navBarItem => navBarItem.subMenuClicked);
  //   if (prevParent && prevParent.title !== data.title) {
  //     prevParent.subMenuClicked = false;
  //   }

  //   // Toggle the clicked parent sidenav and update its color
  //   data.subMenuClicked = !data.subMenuClicked;
  //   console.log(data.subMenuClicked,'data');

  //   if (data.subMenuClicked) {
  //     data.isActive = true;
  //   } else {
  //     data.isActive = false;
  //   }
  // }

}
