import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { slideInOut } from 'src/animations/slideInOut';
import { HelpDialogComponent } from 'src/app/components/help-dialog/help-dialog.component';
import { LogoutConfirmationComponent } from 'src/app/components/logout-confirmation/logout-confirmation.component';
import { ABS_ACCOUNT_LOGIN } from 'src/app/constants/absolute-routes';
import { CONFIRMATION_LOGOUT_VALUE, HELP_DIALOG_VALUE, LAYOUT } from 'src/app/constants/text';
import { getProfileImageSelector } from '../../modules/my-profile/profileStore/profile.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[slideInOut]
})
export class HeaderComponent implements OnInit {
  uiText = LAYOUT;
  image

  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() smallWindow!: boolean;

  isExpanded = true;
  profileOpen = false;
  constructor(private dialog: MatDialog,
    private _router:Router,
    private _store:Store
    ) {}

    ngOnInit(): void {
      this._store.select(getProfileImageSelector).subscribe((data:any)=>{
        this.image = data?.profile
      })
    }

    expand() {
      this.isExpanded = !this.isExpanded;
      this.stateChange.emit(this.isExpanded);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(HelpDialogComponent, {
      disableClose: true,
      data:HELP_DIALOG_VALUE
    });
  }
  openLogoutDialog() {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent, {
      disableClose: true,
      data:CONFIRMATION_LOGOUT_VALUE
    });

    dialogRef.afterClosed().subscribe((confirmed: any) => {
      console.log(confirmed,'qwerty');

      if (confirmed!='cancel') {
        this._router.navigate([ABS_ACCOUNT_LOGIN.fullUrl])
        sessionStorage.clear();
      }
    });
  }
}
