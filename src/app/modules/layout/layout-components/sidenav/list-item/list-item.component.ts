import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
// import { rotateAnimation } from 'src/animations/rotate';
import { LogoutConfirmationComponent } from 'src/app/components/logout-confirmation/logout-confirmation.component';
import { ABS_ACCOUNT_LOGIN } from 'src/app/constants/absolute-routes';
import { IsideNav, sideNavList } from 'src/app/constants/sidenav';
import { CONFIRMATION_LOGOUT_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  // animations:[rotateAnimation]
//   animations:[ rotateAnimation,
//     trigger('slideInOut', [
//       state(
//         'open',
//         style({
//           transform: 'translateX(0)',
//         })
//       ),
//       state(
//         'closed',
//         style({
//           transform: 'translateX(-100%)',
//         })
//       ),
//       transition('open <=> closed', [animate('0.3s ease-in-out')]),
//     ]),
//   ],
})
export class ListItemComponent implements OnInit {
  @Input() navlist!: IsideNav;
  @Input() isShowing!: boolean;
  @Input() index!: any;
  @Output() showsubmenu = new EventEmitter();
  rotateDirection = 'clockwise';
  constructor(private router: Router,private dialog:MatDialog) {

    // this.rotate()
  }

  ngOnInit(): void {
  }

  showSideNav(item: any) {
    this.showsubmenu.emit(item);
  }
  parentChecker(navBarItem: any): boolean {
    let checker = this.router.url.slice(7);
    let subMenuOptions = navBarItem.options;
    return subMenuOptions && subMenuOptions.some((subMenuItem: any) => subMenuItem.routerLink == checker);
  }
  logout(){
    const dialogRef = this.dialog.open(LogoutConfirmationComponent, {
      disableClose: true,
      data:CONFIRMATION_LOGOUT_VALUE
    });

    dialogRef.afterClosed().subscribe((confirmed: any) => {
      console.log(confirmed,'qwerty');
      if (confirmed!='cancel') {
        this.router.navigate([ABS_ACCOUNT_LOGIN.fullUrl])
        sessionStorage.clear();
      }
    });
  }
}
