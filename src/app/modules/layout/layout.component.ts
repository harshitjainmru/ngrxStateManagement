import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { LAYOUT } from 'src/app/constants/text';
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit, AfterViewInit {
  uiMessage = LAYOUT;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isShowing = true;
  showSubmenu: boolean = false;
  isExpanded = true;
  smallWindow = false;
  notification = false
  @ViewChild("drawer", { static: true }) drawer: MatDrawer;
  constructor(private observer: BreakpointObserver, private _route: Router) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 958px)'])
      .pipe(delay(1))
      .subscribe((res: any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav?.close();
          this.isShowing = true;

          this.smallWindow = true;
        } else {
          this.sidenav.mode = 'side';
          this.smallWindow = false;
          this.isExpanded = true;
          this.sidenav.open();
        }
      });
    this._route.events
      .pipe(
        // untilDestroyed(this),
        filter((e: any) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
  ngOnInit(): void {

  }

  updateIsExpanded(value: boolean) {
    this.isExpanded = value;
    if (this.sidenav.mode != 'side') {
      this.isShowing = true;

      this.sidenav.toggle();
    } else {
      this.isShowing = value;
    }
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  toggleNotification() {
    this.drawer?.toggle();
    console.log('hiii');
    console.log(this.drawer,'fffg');
    console.log(this.drawer.opened,'fffg');

    // console.log(this.drawer.toggle(),'hiiiii');
  }
}
