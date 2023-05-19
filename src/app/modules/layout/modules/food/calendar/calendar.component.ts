import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfirmationComponent } from 'src/app/components/logout-confirmation/logout-confirmation.component';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { FoodService } from 'src/app/services/food/food.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() myCalendar: any;
  @Input() options: any;
  @Output() calendarData = new EventEmitter<any>();
  amount;
  availableCoupon;
  Month;
  year;
  selectall;
  selectAllCheckbox: boolean = false;
  constructor(
    private dialog: MatDialog,
    private dataService: FoodService,
    private _notificationService: UtilityServiceService
  ) {
    this.Month = this.dataService.CurrentMonth;
    this.year = this.dataService.currentYear;
  }

  ngOnInit(): void {
    this.dataService.getCouponAvailable().subscribe((res) => {
      this.availableCoupon = res;
    });
  }
  week = [
    {
      value: 0,
      viewValue: 'Mon',
    },
    {
      value: 1,
      viewValue: 'Tue',
    },
    {
      value: 2,

      viewValue: 'Wed',
    },
    {
      value: 3,
      viewValue: 'Thu',
    },
    {
      value: 4,
      viewValue: 'Fri',
    },
    {
      value: 5,
      viewValue: 'Sat',
    },
    {
      value: 6,
      viewValue: 'Sun',
    },
  ];
  isLocked(day: any): boolean {
    let d = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(d.getDate() + 1);
    if (d.getHours() >= 18 && day.date === tomorrow.getDate()) {
      // delete day.couponPurchased;
      delete day.booked;
      return true;
    }
    if (day.date <= d.getDate()) {
      return true;
    }
    return false;
  }

  showChecked(day: any): boolean {
    let d = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(d.getDate() + 1);
    if (d.getHours() >= 18 && day.date === tomorrow.getDate()) {
      return false;
    }
    if (day.couponPurchased === false && day.date > d.getDate()) {
      return true;
    } else {
      return false;
    }
  }

  selectAll(event: any) {
    let allChecked = true;
    this.myCalendar.map((week: any) => {
      week.map((day: any) => {
        if ('booked' in day && day.booked === false && event.checked) {
          if (event.checked == true) {
            day.booked = true;
            this.dataService.setCouponAvailable(this.availableCoupon - 1);
          } else {
            day.booked = false;
            this.dataService.setCouponAvailable(this.availableCoupon + 1);
          }
        } else if (
          'booked' in day &&
          day.booked === true &&
          'couponPurchased' in day &&
          day.couponPurchased === false
        ) {

          if (event.checked == true) {
          } else {
            day.booked = false;
            this.dataService.setCouponAvailable(this.availableCoupon + 1);
          }
        }
        if ('booked' in day && day.booked === false) {
          allChecked = false;
        }
      });
    });
    this.calendarData.emit(this.myCalendar);
    this.selectAllCheckbox = allChecked; // update selectAllCheckbox based on the status of all the checkboxes
  }
  onChangeCheckBox(event: any, i: any, day: any) {
    console.log(event.target?.checked, 'event.target.checked', event.checked);

    this.myCalendar[i].map((item: any) => {
      if (item.date == day.date) {
        if (event.checked) {
          item.booked = true;
          this.dataService.setCouponAvailable(this.availableCoupon - 1);
        } else {
          item.booked = false;
          this.dataService.setCouponAvailable(this.availableCoupon + 1);
        }
      }
    });
    let allChecked = true;
    this.myCalendar.map((week: any) => {
      week.map((day: any) => {
        if ('booked' in day && day.booked === false) {
          allChecked = false;
        }
      });
    });
    this.calendarData.emit(this.myCalendar);
    this.selectAllCheckbox = allChecked; // update selectAllCheckbox based on the status of all the checkboxes
  }

  cancelCoupon(i: number, day: any) {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent, {
      data: {
        value: 'Cancel Coupon',
        QUESTION_VALUE: 'Are you sure want to cancel this coupon ?',
        BUTTON1: 'No',
        BUTTON2: 'Yes',
        panelClass: 'instruction',
        disableClose: true,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== 'cancel') {
        this.myCalendar[i].map((item: any) => {
          if (item.date == day.date) {
            item.couponPurchased = false;
            item.booked = false;
            this.dataService.getAmount().subscribe((count) => {
              this.amount = count - 25;
            });
            this.dataService.setAmount(this.amount);
            this.dataService.setCouponAvailable(this.availableCoupon + 1);
            this._notificationService.showSuccess(MESSAGES.couponRevoke, '');
          }
        });
        this.calendarData.emit(this.myCalendar);
      }
    });
  }
}
