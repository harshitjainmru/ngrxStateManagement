import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  calendarData: any = [];
  myCalendar: any = [];
  amount = new BehaviorSubject(0);
  available = new BehaviorSubject<number>(0);
  amount$ = this.amount.asObservable();
  available$ = this.available.asObservable();
  currentYear;
  CurrentMonth;
  getAmount(): Observable<any> {
    return this.amount$;
  }
  setAmount(latestValue) {
    return this.amount.next(latestValue);
  }
  getCouponAvailable(): Observable<any> {
    return this.available$;
  }
  setCouponAvailable(latestValue) {
    return this.available.next(latestValue);
  }
  constructor() {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.CurrentMonth = month[date.getMonth()];
  }
  createCalendarData() {
    // 👇️ Current Month 0 ->sun, 1->mon
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    let counter_days = 1;
    for (let i = 0; i < 35; i++) {
      let temp: any = {};
      if (i >= firstDay.getDay() - 1 && counter_days <= this.daysInMonth()) {
        // no of days in month 30 or 31 or 28
        let currentDay = this.getWeekDay(counter_days);
        temp['dayInWeek'] = this.weekDayData[currentDay.getDay()];
        temp['date'] = currentDay.getDate();
        if (
          temp.dayInWeek == 'Mon' ||
          temp.dayInWeek == 'Tue' ||
          temp.dayInWeek == 'Wed' ||
          temp.dayInWeek == 'Thu' ||
          temp.dayInWeek == 'Fri'
        ) {
          if (temp.date > date.getDate()) {
            temp['couponPurchased'] = false;
            temp['booked'] = false;
          }
        }
        counter_days++;
        this.calendarData.push(temp);
      } else {
        this.calendarData.push(temp);
      }
    }
    this.createCalendar();
  }

  daysInMonth() {
    let d = new Date();

    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  }

  createCalendar() {
    const ans = [];
    for (let i = 0; i < this.calendarData.length; i += 7) {
      const chunk = this.calendarData.slice(i, i + 7);
      ans.push(chunk);
    }
    this.myCalendar = ans;
    console.log(this.myCalendar);
  }

  getWeekDay(day: number) {
    let date = new Date();
    let weekDay = new Date(date.getFullYear(), date.getMonth(), day);
    return weekDay;
  }

  weekDayData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
}
